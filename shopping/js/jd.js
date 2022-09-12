function all_sec1(thi){
	var chec=document.getElementsByName('chec');
	var flag=thi.checked;
	
	if(flag){
		for(var i in chec){
			chec[i].checked=true;
		}
	}
	else{
		for(var i in chec){
			chec[i].checked=false;
		}
	}
	
	
}
function one_sec1(){
	
	var chec=document.getElementsByName('chec');
	// 商品总价
	var zong=0;
	// 统计对象次数
	var num=0;
	// 统计商品数量
	var num1=0;
	for(var i=1;i<chec.length-1;i++){
		if(chec[i].checked){
			var flag=true;
		}
		else{
			var flag=false;
			break;
		}
	}
	chec[0].checked=flag;
	chec[chec.length-1].checked=flag;
	
	// 统计价格
	for(var i=1;i<chec.length-1;i++){
		if(chec[i].checked){
			num++;
			// 获得ul父节点
			var par=chec[i].parentNode.parentNode;
			//获得指定ul下的li
			var li=par.getElementsByTagName('li');
			// 单个商品总价格
			var s=li[6].innerText.split('￥')[1];
			// 获得所有商品总价 
			zong+=Number(s)
			document.getElementById('zong').innerText='￥'+zong;
			// 获得商品数量
			var f=li[5].getElementsByTagName('input');
			
			var num2=f[0].value;
			num1+=Number(num2);
			// 获得商品数量统计数量
			document.getElementById('sum').innerText=num1;	
		}
	}
	if(num==0){
		document.getElementById('sum').innerText=0;
		document.getElementById('zong').innerText='￥'+0.00;
		
	}
}
function add(thi,sig){
	// var shu=document.getElementById('shuliang');
	var shu;
	// 减
	if(sig=='1'){
		var shu=thi.nextElementSibling;//下一个
		if(shu.value>=1){
		shu.value=Number(shu.value)-1;
		}
	}
	// 加
	else{
		var shu=thi.previousElementSibling;//上一个
		if(shu.value<=98){
		shu.value=Number(shu.value)+1;
		}
	}
	// 本节点的父节点的前一个元素
	var val=shu.parentNode.previousElementSibling.innerHTML;
	// 计算总价
	var zong=Number(val)*Number(shu.value);
	// 本节点的父节点的下一个元素里填入值
	shu.parentNode.nextElementSibling.innerHTML='￥'+zong;
}
function mv(thi){
	// 删除div
	var div=thi.parentNode.parentNode.parentNode;
	div.remove();
}
