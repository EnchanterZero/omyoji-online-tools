/**
 * Created by intern07 on 16/12/2.
 */
var jsonObj = {
  "aaData": [{
    "port": "0",
    "reverve": "否",
    "vip": "否",
    "connect": "addr",
    "inf": "if_192.168.92.21_T1_0_13",
    "domain": "内网",
    "upPort": "Ten-GigabitEthernet1/0/13",
    "upDevice": "192.168.92.21",
    "warehouse": "XG01-星光机房",
    "type": "服务器",
    "ip": "10.93.21.28"
  }], "length": 0, "recordsFiltered": 1, "recordsTotal": 0, "start": 0, "success": true
};
jsonObj.aaData.map((item)=>{
  console.log(item.inf);
})

for(var i=0;i<jsonObj.aaData.length;i++){
  console.log(jsonObj.aaData[i].inf);
}