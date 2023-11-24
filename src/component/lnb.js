export default function Lnb(){

// id에 넣어줬음
// 단순 변수일뿐

    // var newNameArray = [...listTile];/** deep copy ...넣으면 스페이스오퍼레이터 이용 :중가로 소가로 제거 란 의미 */
    // newNameArray[0] = "스테이트 데이터 변경"
    // titleChange(newNameArray);
    return(

<div className='lnb'>
{/* <input type='text' onChange={showText}></input> 이전내용 프로그램만들어 전달 받음 */}
{/* <input type='text' onChange={(e)=>{ console.log(e.target.value)}}></input> */}
<input type='text' onChange={(e)=>{
const title = e.target.value;
console.log(title);



 }}></input>
 {/* <button className='btn_cm'>{listTile[0]}</button> */}
  <h2>메뉴 모음</h2>
  <ul>
    <li><button id='name' className='btn_cm' >test</button></li>
    <li>menu2</li>
    <li>menu3</li>
    <li>menu4</li>
  </ul>
</div>

);


}