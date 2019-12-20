from requests_html import AsyncHTMLSession;
import re;
import paramiko;
import pymysql;

sesh = AsyncHTMLSession(verify=False);
async def get_29ru():
    data = await sesh.get('https://29.ru/text/');
    titlesData = data.html.find('article h2');
    imagesData = data.html.find('article img');
    articlesData = data.html.find('article>a');
    images = [];
    for img in imagesData:
        images.append(img.attrs['src'])
    titles=[];
    for title in titlesData:
        titles.append(title.text)
    links=[];
    for article in articlesData:
        links.append(next(iter(article.absolute_links)))
    combined = [{'title': title, 'image': img, 'url': link} for title, img, link in zip(titles, images, links)]
    return combined;

# results = sesh.run(get29ru, get_arhdrama);
results = sesh.run(get_29ru);

# ssh
ssh = paramiko.SSHClient();
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy());
ssh.connect('nwsggr.beget.tech', username='nwsggr');

#sql
connection = pymysql.connect(host='nwsggr.beget.tech', user='nwsggr_bd', passwd='123456', db='nwsggr_bd');

#sending data
try:
    for result in results:
        with connection.cursor() as cursor:
            clear = 'TRUNCATE TABLE Test29';
            cursor.execute(clear)
            for elem in result:
                sql = "INSERT INTO Test29 (newsTitle, newsImg, newsURL) VALUES ('"+ elem.get('title')+"', '"+elem.get('image')+"', '"+elem.get('url')+"');"
                cursor.execute(sql)
                connection.commit()
finally:
    connection.close()
    ssh.close();

