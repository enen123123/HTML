$(function(){
	// 全选操作
	$('#che').click(function(){
		// 取出che的勾选值	将全选按钮分配到其他上
		var flag=$(this).prop('checked');
		// 将che1的勾选值更改
		$('input[name=che1]').prop('checked',flag);
		
	})
	// 判断是否全选	全选按钮
	$('input[name=che1]').click(function(){
		var flag=true;
		var che1=$('input[name=che1]');
		// 遍历
		che1.each(function(){
			if(!$(this).prop('checked')){
				flag=false;
				return;
			}
		})
		$('#che').prop('checked',flag);
	})
	// 反选
	$('#fx').click(function(){
		var chebox=$('input[name=che1]');
		chebox.each(function(){
			// 获得多选框初始状态
			var flag=$(this).prop('checked');
			$(this).prop('checked',!flag);
		})
		
		// 再次判断判断是否全选
		var flag=true;
		var che1=$('input[name=che1]');
		// 遍历
		che1.each(function(){
			if(!$(this).prop('checked')){
				flag=false;
				return;
			}
		})
		$('#che').prop('checked',flag);
	})
	
	// 新增一行
	$('#addrow').click(function(){
		// 获得table
		var tab=$('#ta');
		tab.append(
			'<tr id="">'+
				'<td><input type="checkbox" name="che1" id="che1" value=""></td>'+
				'<td>书名</td>'+
				'<td>作者</td>'+
				'<td>数量</td>'+
				'<td>'+
					'<input type="button" name="bu1" value="修改数量" onclick="change(this)">'+
					'&nbsp'+
					'<input type="button" value="删除">'+
				'</td>'+
			'</tr>'
		)
		
		if(tab.append()){
			
			$('#che').prop('checked',false);
		}
		
		
		
	})
	
	
	// 删除行
	$('#delrow').click(function(){
		var del=$('input[name=che1]:checked');
		if(del.length==0){
			alert('至少选择一行！！！')
		}
		else{
			// 获得父节点的父节点		删除
			del.parent().parent().remove()
			
		}
	})
	
	//复制行 
	$('#copyrow').click(function(){
		var copy=$('input[name=che1]:checked');
		if(copy.length==0){
			alert('至少选择一行！！！')
		}
		else{
			// 复制
			var tr=copy.parent().parent().clone();
			// 粘贴
			$('#ta').append(tr);
		}
		
	})
		
	// end
})

// 修改数据	删除
function change(thi){
	// 转化js对象为jquery对象
	var thipp=$(thi).parent().parent();
	thipp.children().eq(3).html('<input type="text" onblur="onb(this)">')
}
function onb(thi){
	var par=$(thi).parent().parent();
	par.children().eq(3).html(thi.value);
}
function del(thi){
	var thipp=$(thi).parent().parent();
	thipp.remove()
}