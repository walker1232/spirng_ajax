"use strict";
var ui={
    div : x =>{return $('<div/>').attr(x);},
    span : x=>{return $},
    anchor : x=>{ //ui.anchor({txt:'test'});
        return $('<a/>').attr({href : '#'}).html(x.txt);},
    ul :x=>{
        let ul =$('<ul>');
        for(var i=0;i<x.len;i++){
            $('<li/>').attr({id : x.id+'-'+i
                }).appendTo(ul);
        }
          return ul;
    },
    label : x=>{
        return $('<label/>')
        .attr('for',x.i)
        .text(x.txt)
    },
    btn : x=>{
        // <button type="button class="btn btn-primary">primary</button>
        // attr / Class / html
        /**<button/>
         * Primary</button> blue
        Secondary</button> gray
        Success</button> green
        Danger</button> red
        Warning</button> yellow
        Info</button> dark green
        Light</button> white
        Dark</button> black
        Link</button> trans*/

        return $('<button>').addClass('btn btn-'+x.clazz)
        .html(x.txt)
    },
    input : x=>{ // id,val
        let y = ui.div({}).addClass("input-group mb-3");
        (ui.div({id:'input-group-prepend'})
                .addClass("input-group-prepend"))
                .html('<span class="input-group-text" id="basic-addon1">'
                        + x.txt
                        +'</span>').appendTo(y);
        
        $("<input/>").attr({
            id : x.id,
            type: x.txt,
            placeholder:"입금액" ,
            "aria-label":"Username",
            "aria-describedby":"basic-addon1"
        }).addClass("form-control").appendTo(y);
        return y;
    },    
    inputGroupPrepend : x =>{
        return '<div class="input-group mb-3">'
         + '<div class="input-group-prepend">'
         + '<span class="input-group-text" id="basic-addon1">@</span>'
         + '</div>'
         + '<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">'
         + '</div>'
    }
}