import paramiko;
import pymysql;

ssh = paramiko.SSHClient();
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy());
ssh.connect('nwsggr.beget.tech', username='nwsggr');
# stdin, stdout, stderr = ssh.exec_command('ls');
# for line in stdout:
#     print('... ' + line.strip('\n'));

connection = pymysql.connect(host='nwsggr.beget.tech', user='nwsggr_bd', passwd='123456', db='nwsggr_bd');
try:
    with connection.cursor() as cursor:
        # Create a new record
        sql = "INSERT INTO 29ru (newsTitle, newsImage) VALUES ('dfgh', 'dsgdg.jgp');"
        cursor.execute(sql)

    # connection is not autocommit by default. So you must commit to save
    # your changes.
    connection.commit()

    # with connection.cursor() as cursor:
    #     # Read a single record
    #     sql = "SELECT * FROM Test"
    #     cursor.execute(sql)
    #     results = cursor.fetchall()
    #     for result in results:
    #         print(result)
finally:
    connection.close()
    ssh.close();
