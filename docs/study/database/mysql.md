# mysql的基本使用

## 连接数据库

```
mysqli_connect(host,username,password,port);
host:主机的IP
username:数据库名称
password:密码
dbname:端口
```

## 增
```
INSERT INTO table_name ( field1, field2,...field )
                       VALUES
                       ( value1, value2,...value );


field1:字段名称
```

## 删

```
DELETE FROM table_name WHERE (条件)
```

## 改

```
UPDATE table_name SET field1=new-value1, field2=new-value2
WHERE (条件)
field1:字段名称
```

## 查
```
SELECT column_name,column_name
FROM table_name
WHERE (条件)
column_name:字段名称
```