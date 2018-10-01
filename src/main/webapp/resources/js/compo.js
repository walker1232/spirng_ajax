"use strict";
var ui={
    div : x =>{return $('<div/>').attr(x);},
    span : x=>{return $},
    anchor : x=>{ //ui.anchor({id:'',txt:''});
        return $('<a/>').attr({href : '#',id:x.id}).html(x.txt);},
    ul :x=>{	//ui.ul({id:'',len: ''})
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
    },
    table : x=>{
    	/*<div class="panel panel-default">
    	  <!-- Default panel contents -->
    	  <div class="panel-heading">Panel heading</div>
		  <div class="panel-body">
    		<p>...</p>
  		  </div>
    	  <!-- Table -->
    	  <table class="table">
    	    ...
    	  </table>
    	</div>*/
    	//let ph = "panel-heading";
    	let d = $('<div>').addClass('panel panel-'+x.type);
    	let ph = $('<div>').addClass('panel-heading').html(x.head);
    	let pb = $('<div>').addClass('panel-body').html('<p>'+x.body+'</p>');
    	let t = $('<table/>').attr({id:x.id}).addClass(x.clazz);
    	let thead = $('<thead/>');
    	let tr = $('<tr/>');
    	$.each(x.list,(i,j)=>{	//x = 배열 혹은 JSON, i = index, j = value
    		$('<th/>').html(j).appendTo(tr);
    	});
    	tr.appendTo(thead);
    	thead.appendTo(t);
    	$('<tbody/>').appendTo(t);
    	ph.appendTo(d);
    	pb.appendTo(d);
    	t.appendTo(d);
    	return d;
    },
    page : x=>{
    	
    	return $('<ul/>').addClass('pagination')
    			.appendTo($('<nav/>')
    			.attr('aria-label','...'));
    	
/*
 * <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      1<span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
 * */
    }
    
}