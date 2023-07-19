var arr=[12, 13, 40, 33, 45, 22, 94];

	document.write("Given array is "+"[12, 13, 40, 33, 45, 22, 94]"+"<br><br>");
	document.write("Find odd number"+"<br><br>");
	
	count=0;
for (let i=0; i<arr.length; i++){
	if(arr[i]%2!=0){
		document.write(arr[i]+"<br>");
		count++;
	}
}

document.write("<br>"+"Total number of odd number is "+count);