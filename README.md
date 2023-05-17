# start

start.bat 要放在 nginx 下才生效
ngix.conf 是 nginx 的配置

# http://nanshanqiao.com:3000/gr/xxxx.git

# gr/nsq 博客

1. 由 `node-serve` 启动 为 `http://127.0.0.1:8081`
2. nginx 配置 转发到 `nanshanqiao.com`

```nginx
    server {
        listen       80;
        server_name  nanshanqiao.com;
        location / {
            #root   C:\project\nsq;
            #index  index.html index.htm;
			proxy_pass  http://127.0.0.1:8081;
        }
	}
```

# gr/account 登录中心

1. 由 `node-serve` 启动 为 `http://127.0.0.1:8082`
2. nginx 配置 转发到 `account.nanshanqiao.com`

```
	server {
        listen       80;
        server_name  account.nanshanqiao.com;
        location / {
            #root   C:\project\account;
            #index  index.html index.htm;
			proxy_pass  http://127.0.0.1:8082;
        }
    }
```

# gr/job-temp

1. 由 `node-serve` 启动 为 `http://127.0.0.1:8083`
2. nginx 配置 转发到 `job-temp.nanshanqiao.com`

```
	server {
        listen       80;
        server_name  job-temp.nanshanqiao.com;
        location / {
            #root   C:\project\job-temp;
            #index  index.html index.htm;
			proxy_pass  http://127.0.0.1:8083;
        }
    }
```

# gr/api 博客/登录的接口

1. 由 `node-serve` 执行 `npm run pro` 启动 为 `http://127.0.0.1:9587`
2. nginx 配置 转发到 `api.nanshanqiao.com`

```nginx
	server {
        listen       80;
        server_name  api.nanshanqiao.com;
        location / {
            #root   C:\project\api;
            #index  index.html index.htm;
			proxy_pass  http://127.0.0.1:9587;
        }
    }
```

# gr/ledger php 网站

1. 由 `CMD` 启动 PHP：`php-cgi.exe -b 127.0.0.1:9001 -c php.ini`
2. nginx 配置 转发到 `C:\project\ledger` 和 `127.0.0.1:9001`

```nginx
	server {
        listen       80;
        server_name  ledger.nanshanqiao.com;
        location / {
            root   C:\project\ledger;
            index  index.html index.htm index.php;
        }
		location ~ \.php$ {
            root           C:\project\ledger;
            fastcgi_pass   127.0.0.1:9001;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include        fastcgi_params;
        }
    }
```

# gr/day php 网站

1. 由 `CMD` 启动 PHP：`php-cgi.exe -b 127.0.0.1:9001 -c php.ini`
2. nginx 配置 转发到 `C:\project\day\dist` 和 `127.0.0.1:9001`

```nginx
	server {
        listen       80;
        server_name  day.nanshanqiao.com;
        location / {
            root   C:\project\day\dist;
            index  index.html index.htm index.php;
        }
		location ~ \.php$ {
            root   C:\project\day\dist;
            fastcgi_pass   127.0.0.1:9001;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include        fastcgi_params;
        }
    }
```

# gr/pw php 网站

1. 由 `CMD` 启动 PHP：`php-cgi.exe -b 127.0.0.1:9001 -c php.ini`
2. nginx 配置 转发到 `C:\project\pw\dist` 和 `127.0.0.1:9001`

```nginx
	server {
        listen       80;
        server_name  pw.nanshanqiao.com;
        location / {
            root   C:\project\pw\dist;
            index  index.html index.htm index.php;
        }
		location ~ \.php$ {
            root   C:\project\pw\dist;
            fastcgi_pass   127.0.0.1:9001;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include        fastcgi_params;
        }
    }
```

# gr/lab php 网站

1. 由 `CMD` 启动 PHP：`php-cgi.exe -b 127.0.0.1:9001 -c php.ini`
2. nginx 配置 转发到 `C:\project\lab` 和 `127.0.0.1:9001`

```nginx
	server {
        listen       80;
        server_name  lab.nanshanqiao.com;
        location / {
            root   C:\project\lab;
            index  index.html index.htm index.php;
        }
		location ~ \.php$ {
            root   C:\project\lab;
            fastcgi_pass   127.0.0.1:9001;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include        fastcgi_params;
        }
    }
```

# gr/demo

1. nginx 配置 转发到 `demo.nanshanqiao.com`

```nginx
	server {
        listen       80;
        server_name  demo.nanshanqiao.com;
        location / {
            root   C:\project\demo\dist;
            index  index.html index.htm index.php;
        }
    }
```

# gr/node-serve

启动静态网站

- 8081 C:\project\nsq
- 8082 C:\project\account
- 8083 C:\project\job-temp
- 9587 C:\project\api `npm run pro`
- 3003 C:\project\chart `node index`

# gr/fopin

# gr/gm
