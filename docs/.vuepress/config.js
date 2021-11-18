const {title} = require("./config");
module.exports = {
    head:[
        ['link',{ rel: 'icon',href: '/img/logo.png'}],
        ['meta', { name: 'theme-color', content: '#505050' }]
    ],
    title: 'Airdust Docs',
    description: 'Airdust的文档库,微尘的文档库,文档库,计算机文档库,计算机开发文档',
    base: '/docs/',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {
                text: '编程学习',
                ariaLabel: '编程学习',
                items: [
                    {
                        text: '前端',
                        items: [
                            {
                                text: 'HTML&CSS',
                                link: '/code/hc/'
                            },
                            {
                                text: 'JavaScript',
                                link: '/code/js/'
                            },
                            {
                                text: 'SQL语句',
                                link: '/code/sql/'
                            },
                            {
                                text:'PHP',
                                link: '/code/php/'
                            }
                        ]
                    },
                    {
                        text: '后端',
                        items: [
                            {
                                text: 'Java',
                                link: '/code/java/'
                            },
                            {
                                text: 'Python',
                                link: '/code/py/'
                            }
                        ]
                    },
                    {
                        text: '其他',
                        items: [
                            {
                                text: 'Git',
                                link: '/code/git/'
                            }
                        ]
                    }
                    ]
            },
            {
                text: '计算机相关',
                ariaLabel: '计算机相关',
                items: [
                    {
                        text: '计算机网络',
                        link: '/basic/jw/'
                    },
                ]
            },
            {text: '算法', link: '/sf/'},
            {
                text: '外部文档',
                items: [
                    {
                        text: 'HarmonyOS',
                        link: 'https://developer.harmonyos.com/cn/documentation',
                        target: '_blank'
                    },
                    {
                        text: 'Android',
                        link: 'https://developer.android.google.cn/guide',
                        target: '_blank'
                    },
                    {
                        text: 'iOS',
                        link: 'https://developer.apple.com/documentation',
                        target: '_blank'
                    }
                ]
            },
            {text: '赞助', link: '/donate/'},
            {
                text: '关于我们',
                items: [
                    {
                        text: '站长小站',
                        link: 'https://anairdust.com',
                        target: '_blank'
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/Airdusts',
                        target: '_blank'
                    },
                    {
                        text: 'Gitee',
                        link: 'https://gitee.com/Airdust',
                        target: '_blank'
                    }
                ]
            }
            ],
        sidebar:{
            "/code/php/":[
                {
                    title: 'PHP基础',
                    collapse: false,
                    sidebarDepth: 3,
                    children: [
                        '',
                        'PHP1',
                        'PHP2',
                        'PHP3',
                        'PHP4',
                        'PHP5',
                        'PHP6',
                        'PHP7',
                        'PHP8'
                    ]
                }
            ],
            "/code/java/":[
                {
                    title: 'Java基础',
                    collapse:false,
                    sidebarDepth: 3,
                    children:[
                        '',
                        'Java1',
                        'Java2'
                    ]
                },
                {
                    title: 'Java Web基础',
                    collapse:false,
                    sidebarDepth: 3,
                    children:[
                        'JavaWeb1'
                    ]
                }
            ],
            "/code/js/":[
                {
                    title: 'JavaScript基础',
                    collapse:false,
                    sidebarDepth:3,
                    children:[
                        '',
                        'js',
                        'bom',
                        'dom'
                    ]
                }
            ]
        }
    }
};