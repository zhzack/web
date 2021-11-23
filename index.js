
let id;

let ele_lists = {
    "cont": {
        "type": "cont",
        "Attributes": {
            "with": 30,
            "height": 30,
            "position_x": 30,
            "position_y": 30,
        },
        "events": "",
        "members": [
        ]
    },
    "leble": {
        "type": "leble",
        "Attributes": {
            "with": 30,
            "height": 30,
            "position_x": 30,
            "position_y": 30,
        },
        "events": "",
        "members": [
        ]
    }
    , "button": {
        "type": "button",
        "Attributes": {
            "with": 30,
            "height": 30,
            "position_x": 30,
            "position_y": 30,
        },
        "events": "",
        "members": [
        ]
    }, "imgBtn": {
        "type": "imgBtn",
        "Attributes": {
            "with": 30,
            "height": 30,
            "position_x": 30,
            "position_y": 30,
        },
        "events": "",
        "members": [
        ]
    }
}



let els_list = document.getElementById("els_lists")




Reflect.ownKeys(ele_lists).forEach(function (key) {
    els_list.innerHTML += `<div id="` + 
    key + `" class= "ele">` + 
    key + `</div>`
});



let elements = document.getElementsByClassName("ele");
let conts = document.getElementsByClassName("cont");

Array.prototype.forEach.call(conts, function (cont) {
    cont.ondragover = ondragover;
    cont.ondrop = ondrop;
});

Array.prototype.forEach.call(elements, function (element) {
    element.draggable = "true"
    element.ondrag = ondrag
});

/* 组件基础数据 */
let ele_data = {
    "type": "",
    "Attributes": {
        "with": 0,
        "height": 0,
        "position_x": 0,
        "position_y": 0,
    },
    "events": "",
    "members": [
    ]
}




/* 深拷贝 */
function deepClone(o1, o2) {
    for (let k in o2) {
        if (typeof o2[k] === 'object') {
            o1[k] = {};
            deepClone(o1[k], o2[k]);
        } else {
            o1[k] = o2[k];
        }
    }
}

function ondrag(event) {
    id = event.target.id;
}

function ondrop(event) {
    event.preventDefault();
    add_ele(id)
    // event.target.appendChild(document.getElementById(id));
}

function ondragover(event) {
    event.preventDefault();
}

function add_ele(params) {
    console.log(ele_lists[params]);
}