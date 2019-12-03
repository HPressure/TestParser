from requests_html import AsyncHTMLSession;
import json;
import re;
import paramiko;
import pymysql;

sesh = AsyncHTMLSession(verify=False);
async def get29ru():
    data = await sesh.get('https://29.ru/text/');
    titlesData = data.html.find('article h2');
    imagesData = data.html.find('article img');
    images = [];
    for img in imagesData:
        images.append(img.attrs['src'])
    titles=[];
    for title in titlesData:
        titles.append(title.text)
    combined=[];
    for indexi, title in enumerate(titles):
        for indexj, img in enumerate(images):
            if(indexi==indexj):
                item = {'title': title, 'image': img}
                combined.append(item)
    return combined;
async def get_arhdrama():
    data = await sesh.get('https://arhdrama.culture29.ru/afisha/tickets/');
    titlesData = data.html.find('.c-card-ticket_title');
    datesData = data.html.find('.c-card-ticket_date');
    titles=[];
    for title in titlesData:
        titles.append(title.text)
    dates = [];
    for date in datesData:
        dates.append(re.sub(u'[^А-Яа-яA-Za-z0-9:\s]*', u'', date.text))
    combined = [];
    for indexi, title in enumerate(titles):
        for indexj, date in enumerate(dates):
            if (indexi == indexj):
                item = {'title': title, 'date': date}
                combined.append(item)
    return combined;

# results = sesh.run(get29ru, get_arhdrama);
results = sesh.run(get29ru);

#ssh
ssh = paramiko.SSHClient();
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy());
ssh.connect('nwsggr.beget.tech', username='nwsggr');

#sql
connection = pymysql.connect(host='nwsggr.beget.tech', user='nwsggr_bd', passwd='123456', db='nwsggr_bd');

#sending data
try:
    for result in results:
        with connection.cursor() as cursor:
            for elem in result:
                sql = "INSERT INTO 29ru (newsTitle, newsImage) VALUES ('"+ elem.get('title')+"', '"+elem.get('image')+"');"
                cursor.execute(sql)
                connection.commit()
finally:
    connection.close()
    ssh.close();

# for index, result in enumerate(results):
#     print(result)
    # with open('./data' + str(index) + '.json', 'w') as fout:
    #     json.dump(result, fout);
    #     fout.close();
