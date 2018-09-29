exports.keys = 'abcdefghijklmnopqrst';

// 添加 view 配置
exports.view = {
	defaultViewEngine: 'nunjucks',
	mapping: {
		'.tpl': 'nunjucks',
	},
};

// 添加 news 的配置项
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// 增加中间件 robot
exports.middleware = [
  'robot'
];

exports.robot = {
  ua: [
		/curl/i,
    /Baiduspider/i,
  ]
};