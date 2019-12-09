from requests_html import AsyncHTMLSession;

sesh = AsyncHTMLSession(verify=False);
async def get29ru():
    data = await sesh.get('https://29.ru/text/');
    articlesData = data.html.find('article>a');
    links=[]
    for article in articlesData:
        links.append(article.absolute_links)

    return links;

results = sesh.run(get29ru);
for result in results:
    for item in result:
        print(item)