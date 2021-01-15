const exec = require('child_process').execSync;
const fs = require('fs');
const rp = require('request-promise');
const download = require('download');

// 公共变量
const KEY = process.env.JD_COOKIE;
const serverJ = process.env.PUSH_KEY;


async function downFile() {
  const url = 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js';
  const crazy_joy = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_crazy_joy.js';
  const blue_coin = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_blueCoin.js';
  const club_lottery = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_club_lottery.js';
  const fruit = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_fruit.js';
  const joy = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_joy.js';
  const feedpet = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_joy_feedPets.js';
  const reward = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_joy_reward.js';
  const joy_run = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_joy_run.js';
  const joy_steal = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_joy_steal.js';
  const moneyTree = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_moneyTree.js';
  const pet = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_pet.js';
  const pigpet = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_pigPet.js';
  const dailyegg = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_daily_egg.js';
  const plantBean = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_plantBean.js';
  const redPacket = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_redPacket.js';
  const shop = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_shop.js';
  const speed = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_speed.js';
  const kd = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_kd.js';
  const superMarket = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_superMarket.js';
  const dreamFactory = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_dreamFactory.js';
  const jdFactory = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_jdfactory.js';
  const small_home = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_small_home.js';
  const necklace = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_necklace.js';
  const syj = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_syj.js';
  const unsubscribe = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_unsubscribe.js';
  const JD_extra_cookie = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/JD_extra_cookie.js';
  const jd_bean_home = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_bean_home.js';
  const jd_bean_sign = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_bean_sign.js';
  const jd_car = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_car.js';
  const jd_crazy_joy_coin = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_crazy_joy_coin.js';
  const jd_jdzz = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_jdzz.js';
  const jd_joy_help = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_joy_help.js';
  const jd_live = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_live.js';
  const jd_lotteryMachine = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_lotteryMachine.js';
  const jd_petTreasureBox = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_petTreasureBox.js';
  const jd_rankingList = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_rankingList.js';
  const jd_unbind = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_unbind.js';
  const lxk0301 = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/lxk0301.boxjs.json'

  const jd_bookshop = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_bookshop.js';
  const jd_car_exchange = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_car_exchange.js';
  const jd_cash = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_cash.js';
  const jd_jxnc = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jd_jxnc.js';
  const jx_sign = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/jx_sign.js';
  const USER_AGENTS = 'https://raw.githubusercontent.com/DoveBoy/jd_scripts/master/USER_AGENTS.js';



  
  
  await down(download(url, './'),'url');
  await down(download(crazy_joy, './'),'crazy_joy');
  await down(download(blue_coin, './'),'blue_coin');
  await down(download(club_lottery, './'),'club_lottery');
  await down(download(fruit, './'),'fruit');
  await down(download(joy, './'),'joy');
  await down(download(feedpet, './'),'feedpet');
  await down(download(reward, './'),'reward');
  await down(download(joy_run, './'),'joy_run');
  await down(download(joy_steal, './'),'joy_steal');
  await down(download(moneyTree, './'),'moneyTree');
  await down(download(pet, './'),'pet');
  await down(download(pigpet, './'),'pigpet');
  await down(download(dailyegg, './'),'dailyegg');
  await down(download(plantBean, './'),'plantBean');
  await down(download(redPacket, './'),'redPacket');
  await down(download(shop, './'),'shop');
  await down(download(speed, './'),'speed');
  await down(download(kd, './'),'kd');
  await down(download(superMarket, './'),'superMarket');
  await down(download(dreamFactory, './'),'dreamFactory');
  await down(download(jdFactory, './'),'jdFactory');
  await down(download(small_home, './'),'small_home');
  await down(download(necklace, './'),'necklace');
  await down(download(syj, './'),'syj');
  await down(download(unsubscribe, './'),'unsubscribe');
  await down(download(JD_extra_cookie, './'),'JD_extra_cookie');
  await down(download(jd_bean_home, './'),'jd_bean_home');
  await down(download(jd_bean_sign, './'),'jd_bean_sign');
  await down(download(jd_car, './'),'jd_car');
  await down(download(jd_crazy_joy_coin, './'),'jd_crazy_joy_coin');
  await down(download(jd_jdzz, './'),'jd_jdzz');
  await down(download(jd_joy_help, './'),'jd_joy_help');
  await down(download(jd_live, './'),'jd_live');
  await down(download(jd_lotteryMachine, './'),'jd_lotteryMachine');
  await down(download(jd_petTreasureBox, './'),'jd_petTreasureBox');
  await down(download(jd_rankingList, './'),'jd_rankingList');
  await down(download(jd_unbind, './'),'jd_unbind');
  await down(download(lxk0301, './'),'lxk0301');

  await down(download(jd_bookshop, './'),'jd_bookshop');
  await down(download(jd_car_exchange, './'),'jd_car_exchange');
  await down(download(jd_cash, './'),'jd_cash');
  await down(download(jd_jxnc, './'),'jd_jxnc');
  await down(download(jx_sign, './'),'jx_sign');
  await down(download(USER_AGENTS, './'),'USER_AGENTS');
}

async function down(downfun,jsname){
  try
  {
    await downfun;
  }
  catch
  {
    await sendNotify('下载出错','有文件下载出错，请及时处理'+jsname);
  }
}

async function changeFile() {
  let content = await fs.readFileSync('./jdCookie.js', 'utf8')
  content = content.replace(/let CookieJDs = []/, `let CookieJDs = [${KEY}]`);
  await fs.writeFileSync('./jdCookie.js', content, 'utf8')

  let content2 = await fs.readFileSync('./sendNotify.js', 'utf8')
  content2 = content2.replace(/let SCKEY = '';/, `let SCKEY = '${serverJ}';`);
  await fs.writeFileSync('./sendNotify.js', content2, 'utf8')
}

async function sendNotify(text, desp) {
  const options = {
    uri: `https://sc.ftqq.com/${serverJ}.send`,
    form: { text, desp },
    json: true,
    method: 'POST'
  }
  await rp.post(options).then(res => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}

async function start() {
  if (!KEY) {
    console.log('请填写 key 后在继续')
    return
  }
  // 下载最新代码
  await downFile();
  console.log('下载代码完毕')
  // 替换变量
  //await changeFile();
  //console.log('替换变量完毕')
  // 执行
  //await exec("node JD_DailyBonus.js >> result.txt");
  await exec("node jd_bean_sign.js >> result.txt");
  await exec("node jd_crazy_joy.js >> result.txt");
  await exec("node jd_blueCoin.js >> result.txt");
  await exec("node jd_club_lottery.js >> result.txt");
  await exec("node jd_fruit.js >> result.txt");
  await exec("node jd_joy.js >> result.txt");
  await exec("node jd_joy_feedPets.js >> result.txt");
  await exec("node jd_joy_reward.js >> result.txt");
  await exec("node jd_joy_run.js >> result.txt");
  await exec("node jd_joy_steal.js >> result.txt");
  await exec("node jd_moneyTree.js >> result.txt");
  await exec("node jd_pet.js >> result.txt");
  await exec("node jd_pigPet.js >> result.txt");
  await exec("node jd_daily_egg.js >> result.txt");
  await exec("node jd_plantBean.js >> result.txt");
  await exec("node jd_redPacket.js >> result.txt");
  await exec("node jd_shop.js >> result.txt");
  await exec("node jd_speed.js >> result.txt");
  await exec("node jd_kd.js >> result.txt");
  await exec("node jd_superMarket.js >> result.txt");
  await exec("node jd_dreamFactory.js >> result.txt");
  await exec("node jd_jdfactory.js >> result.txt");
  await exec("node jd_small_home.js >> result.txt");
  await exec("node jd_necklace.js >> result.txt");
  await exec("node jd_syj.js >> result.txt");
  await exec("node jd_unsubscribe.js >> result.txt");
  await exec("node jd_lotteryMachine.js >> result.txt");
  await exec("node jd_car.js >> result.txt");
  await exec("node jd_jdzz.js >> result.txt");
  await exec("node jd_live.js >> result.txt");
  await exec("node jd_rankingList.js >> result.txt");

  await exec("node jd_bookshop.js >> result.txt");
  await exec("node jd_car_exchange.js >> result.txt");
  await exec("node jd_cash.js >> result.txt");
  await exec("node jd_jxnc.js >> result.txt");
  await exec("node jx_sign.js >> result.txt");
  console.log('执行完毕')

  if (serverJ) {
    const path = "./result.txt";
    let content = "";
    if (fs.existsSync(path)) {
      content = fs.readFileSync(path, "utf8");
    }
    let t = content.match(/【签到概览】:((.|\n)*)【签到总计】/)
    let res = t ? t[1].replace(/\n/, '') : '失败'
    let t2 = content.match(/【签到总计】:((.|\n)*)【账号总计】/)
    let res2 = t2 ? t2[1].replace(/\n/, '') : '总计0'


    await sendNotify("" + ` ${res2} ` + ` ${res} ` + new Date().toLocaleDateString(), content);
  }
}

start()
