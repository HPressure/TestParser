import paramiko;
import pymysql;

ssh = paramiko.SSHClient();
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy());
ssh.connect('nwsggr.beget.tech', username='nwsggr');
# stdin, stdout, stderr = ssh.exec_command('ls');
# for line in stdout:
#     print('... ' + line.strip('\n'));

connection = pymysql.connect(host='nwsggr.beget.tech', user='nwsggr_bd', passwd='123456', db='nwsggr_bd');

