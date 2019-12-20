from requests_html import HTMLSession;
from requests_html import AsyncHTMLSession;
import paramiko;
import pymysql;

sesh = AsyncHTMLSession(verify=False);
imgSesh = HTMLSession(verify=False);
def get_image(link):
    data = imgSesh.get(link);
    image = data.html.find('.ticket-post img', first=True);
    return 'https://arhdrama.culture29.ru' + image.attrs['src'];
async def get_arhdrama():
    data = await sesh.get('https://arhdrama.culture29.ru/afisha/tickets/');
    titlesData = data.html.find('.c-card-ticket_title');
    datesData = data.html.find('.c-card-ticket_month');
    hoursData = data.html.find('.c-card-ticket_time>span:nth-child(2)');
    descriptionData = data.html.find('.c-card-ticket_text1');
    buyLinksData = data.html.find('.a_quicktickets');
    titles = [];
    links = [];
    for title in titlesData:
        titles.append(title.text);
        links.append(next(iter(title.absolute_links)));
    images=[];
    for link in links:
        images.append(get_image(link));
    dates = [];
    for date in datesData:
        dates.append(date.text);
    hours = [];
    for hour in hoursData:
        hours.append(hour.text);
    descriptions=[];
    for description in descriptionData:
        descriptions.append(description.text);
    buyLinks=[];
    for buyLink in buyLinksData:
        buyLinks.append(next(iter(buyLink.absolute_links)));

    combined = [{'title': title, 'description': description, 'date': date, 'hour': hour, 'url': buyLink, 'image': img} for title, description, date, hour, buyLink, img in zip(titles, descriptions, dates, hours, buyLinks, images)]
    return combined;

results = sesh.run(get_arhdrama);


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
            clear = 'TRUNCATE TABLE ArhDrama';
            cursor.execute(clear)
            for elem in result:
                sql = "INSERT INTO ArhDrama (Title, Description, Img, BuyUrl, Date, Hour) VALUES ('"+ elem.get('title')+"', '"+elem.get('description')+"', '"+elem.get('image')+"', '"+elem.get('url')+"', '"+elem.get('date')+"', '"+elem.get('hour')+"');"
                cursor.execute(sql)
                connection.commit()
finally:
    connection.close()
    ssh.close();
