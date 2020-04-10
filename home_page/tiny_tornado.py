#/usr/bin/env python
# -*- coding: UTF-8 -*-
# import sys
# reload(sys)
# sys.setdefaultencoding('utf-8')

import tornado.ioloop
import tornado.web
import tornado.websocket
import tornado.httpserver



options_port = 80




class MainHandler(tornado.web.RequestHandler):

    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', '*')
        self.set_header('Access-Control-Max-Age', 1000)
        self.set_header('Content-type', 'application/json')
        self.set_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD')
        self.set_header('Content-Type', 'application/json; charset=UTF-8')
        self.set_header('Access-Control-Allow-Headers',
                        'Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-By, Access-Control-Allow-Methods')

    def get(self):
        self.write("<h1>hello，aoshuomusic</h1>")
    def post(self):
        self.write("<h1>hello，aoshuomusic</h1>")
    def head(self):
        # 阿里云slb调用HEAD方法
        self.write("<h1>hello，aoshuomusic</h1>")
        # self.render("index.html")


# 路由
urls = [
    (r"/", MainHandler),
]


# 创建配置-开启调试模式
configs = dict(
    static_path = "./static" ,   #ico文件路径
    template_path = "./templates", #视图文件路径
    cookie_secret = "DONT_SHOW_SECRET",
    debug = True,
    )


# 自定义应用
class MyApplication(tornado.web.Application):
    def __init__(self, urls, configs):
        super(MyApplication, self).__init__(handlers=urls, **configs)



# 启动服务器
if __name__ == '__main__':
    # options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(
        MyApplication(urls, configs),
        # 启用了nginx, ssl要关闭
        # ssl_options = {
        #     "certfile": os.path.join(os.path.abspath("./ssl"), "1965343_aoshuomusic.com.pem"),
        #     "keyfile": os.path.join(os.path.abspath("./ssl"), "1965343_aoshuomusic.com.key"),
        # },
    )
    http_server.listen(options_port)
    io_loop = tornado.ioloop.IOLoop.instance()
    try:
        io_loop.start()
    except SystemExit as KeyboardInterrupt:
        io_loop.stop()
