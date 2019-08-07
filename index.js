var katzDeliLine =[];

var count=0;

function takeANumber2(){
      count += 1;
      console.log("Welcome, you are customer number " + count);
}
takeANumber2();
takeANumber2();
takeANumber2();
takeANumber2();

function takeANumber(line,name){
  line.push(name);
  return "Welcome, "+ name +". You are number "+ line.length + " in line.";
}

function nowServing(line){
  if(!line.length){
    return "There is nobody waiting to be served!";
  }
  else {
    var first = line.shift();
    return "Currently serving " + first +".";
  }
}

function currentLine(line){
  if(!line.length){
    return "The line is currently empty.";
  }
  var numberedLine=[];
  for(var i=0; i<line.length; i++){
    numberedLine.push(i+1 + ". " + line[i]);
  }
  return "The line is currently: " + numberedLine.join(", ");
}