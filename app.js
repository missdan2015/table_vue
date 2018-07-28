var desList = [{
        desText: '方向导航单元格'
    },
    {
        desText: '按回车键进入按列编辑下一个单元格'
    },
    {
        desText: '按ESC撤销编辑'
    },
    {
        desText: '按Tab键进入按行编辑下一个单元格'
    },
    {
        desText: 'editNextOnEnterKey="ture"，按回车键进入下一个单元格编辑'
    }
];
var vm = new Vue({
    el: '#table',
    data: {
        tableName: 'CellEdit 单元格编辑',
        description: 'Descriptions',
        desList: desList,
        editingIndex: -1,
        colIndex: 'none',
        people: [{
                id:'',
                name: 'dd',
                age: 10,
                sex: '女',
                birth: '2007.01.01',
                ps: '我是大牛',
                country: '中国'
            },
            {
                name: 'dd',
                age: 9,
                sex: '女',
                birth: '2006.01.01',
                ps: '我爱共产党',
                country: '中国'
            },
            {
                name: 'xyz',
                age: 8,
                sex: '男',
                birth: '2005.01.01',
                ps: '我是外国人',
                country: '日本'
            },
            {
                name: 'xx',
                age: 7,
                sex: '女',
                birth: '2004.01.01',
                ps: '留学生',
                country: '美国'
            }
        ],
        countries: [{
            text: '中国'
        }, {
            text: '美国'
        }, {
            text: '英国'
        }, {
            text: '德国'
        }, {
            text: '法国'
        }, {
            text: '日本'
        }, {
            text: '韩国'
        }],
        checkAll:false,
        searchList: [],
        filterPeople: []
    },
    created: function () {
        this.filterPeople = this.people;
    },
    methods: {
        editItem: function (index, col) {
            console.log(index);
            this.colIndex = col;
            this.editingIndex = index;
        },
        saveItem: function () {
            this.editingIndex = -1;
        },
        selectAll: function (e) {
            var checkbox = document.getElementsByClassName('tr');
            console.log(e);
            for (i in checkbox) {
                checkbox[i].checked = e.srcElement.checked; //同步等式两边checked属性值
            }
            // this.checkAll = !this.checkAll;
            // console.log(this.checkAll);
            // var that = this;
            // this.people.forEach(element => {
            //     element.checked = that.checkAll;               
            // });
        },
        addTr: function () {
            this.people.push({
                name: '',
                age: null,
                sex: '',
                birth: '',
                ps: '',
                country: ''
            });
        },
        deleteTr: function () {
           var checkbox = document.getElementsByClassName('tr');
            for (let i = checkbox.length - 1; i >= 0; i--) {
                if (checkbox[i].checked == true) {
                    this.people.splice(i, 1);
                  //  checkbox[i].checked = false; //解决了状态遗留得问题
                }
            }
            console.log(i);
        },
        searchTr: function (e) {
            //console.log(e);
            var searchStr = e.target.value; 
            self = this;
            self.searchList = [];
            if (searchStr) {
                this.filterPeople = this.people.filter(function(p) {
                return p.name.indexOf(searchStr) > -1;
                });
            } else {
                this.filterPeople = this.people;
            }
        }
    }
});