import { Component, OnInit, ViewChild, ElementRef, Input ,Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
declare function require(name:string);
var converter = require('number-to-words');
@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  @Input()canvasWidth:string;
  @Input()canvasHeight:string;
  @Input()fontStyle:string;
  @Input()fontSize:string;
  @Input()fontColor:string;
  @Input()alphaNumeric:boolean

  @Output() iscaptchaRight=new EventEmitter();
 private textEntered:number;
 private result:number;
  private context: CanvasRenderingContext2D;


@ViewChild('canvas') canvas:ElementRef;
operationMap:Map<Number,String>;
  constructor() {
    this.operationMap=new Map<Number,String>();
    this.operationMap[1]='+';
    this.operationMap[2]='-';
    this.operationMap[3]='*';
    this.canvasWidth='100px';
    this.canvasHeight='100px';
    this.fontStyle='Arial';
    this.fontColor='black';
    this.alphaNumeric=true;
  }



  ngOnInit() {
  }

regerate(){
  let width=this.canvasWidth.replace("px",""),height=this.canvasHeight.replace("px","");
  console.log(width,height);
  this.context.clearRect(0, 0, parseInt(width), parseInt(height)); 
  this.generateCaptcha();
  this.textEntered=null;
}

generateCaptcha(){
 // context.clearRect(0, 0, canvas.width, canvas.height);
let getRandomForFirst=this.getRandom(0,2);
if(getRandomForFirst==1){
this.makeExpression(true);  
}else{
  this.makeExpression(false);  
  }}

ngOnChanges(simplChanges){
//console.log(simplChanges);
}
ngAfterViewInit(){
  this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
  this.generateCaptcha();
}

calculateExpression(firstNum,secondNum,op){
return eval('firstNum '+op+'secondNum');
}

verify(){

if(this.textEntered==this.result){
  this.iscaptchaRight.emit('true');
}else{
  this.iscaptchaRight.emit('false');
}


}

getRandom(min,max){
  return Math.ceil(Math.random() * (max - min) + min);
}

getOperation(){

return this.operationMap[this.getRandom(0,3)];

}

makeExpression(isFirstString:boolean){
  let operation=this.getOperation();
  let firstNumber,secondNumber;
  let stringFromExp; 
  if(operation=='*'){
    firstNumber=this.getRandom(1,20);
   secondNumber=this.getRandom(1,10);
   }else{
    firstNumber=this.getRandom(1,100);
   secondNumber=this.getRandom(1,10);
    }
    this.result=(this.calculateExpression(firstNumber,secondNumber,operation));
    stringFromExp=converter.toWords(isFirstString?firstNumber:secondNumber);
   // console.log(firstNumber,secondNumber,stringFromExp,isFirstString);
   
    if(this.alphaNumeric==false){
      this.draw(firstNumber,operation,secondNumber);
    
    }else{
      if(isFirstString){
        this.draw(stringFromExp,operation,secondNumber);
            }else{
              this.draw(firstNumber,operation,stringFromExp);
            }
    }

   

}
 draw(first,middle,last) {
  this.context.font = this.fontSize+"px "+this.fontStyle;
  this.context.textBaseline = 'middle';
  this.context.textAlign = 'center';
  this.context.fillStyle=this.fontColor;
  
  const x = (this.canvas.nativeElement as HTMLCanvasElement).width/2;
  const y = (this.canvas.nativeElement as HTMLCanvasElement).height/2;

 //console.log(x,y);
  this.context.fillText(first+" "+middle+" "+last, x,y);
}

}
