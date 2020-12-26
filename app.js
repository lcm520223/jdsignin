// version v0.0.2
// create by ruicky
// detail url: https://github.com/ruicky/jd_sign_bot

const exec = require('child_process').execSync;
const fs = require('fs');
const rp = require('request-promise');
const download = require('download');

// 公共变量
const KEY = 'pt_key=AAJf5zMGADA46qAwquR5TngO0lZy6TEwPmYmGDSzbR484S-KG4d8Bd215LLtPG7CqHep60DySP8;pt_pin=jd_557c0efbeb65e';
const serverJ = 'SCU139511Tc6ea61e4cde1525b22516073d5a5ffb15fe73282204b7';
const DualKey = 'pt_key=AAJf5zMGADA46qAwquR5TngO0lZy6TEwPmYmGDSzbR484S-KG4d8Bd215LLtPG7CqHep60DySP8;pt_pin=jd_557c0efbeb65e';


async function downFile() {
  // const url = 'https://cdn.jsdelivr.net/gh/NobyDa/Script@master/JD-DailyBonus/JD_DailyBonus.js'
  const url = 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js';
  const crazy_joy = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_crazy_joy.js';
  const blue_coin = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_blueCoin.js';
  const club_lottery = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_club_lottery.js';
  const fruit = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_fruit.js';
  const joy = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_joy.js';
  const feedpet = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_joy_feedPets.js';
  const reward = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_joy_reward.js';
  const joy_run = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_joy_run.js';
  const joy_steal = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_joy_steal.js';
  const moneyTree = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_moneyTree.js';
  const pet = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_pet.js';
  const pigpet = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_pigPet.js';
  const dailyegg = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_daily_egg.js';
  const plantBean = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_plantBean.js';
  const redPacket = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_redPacket.js';
  const shop = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_shop.js';
  const speed = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_speed.js';
  const kd = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_kd.js';
  const superMarket = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_superMarket.js';
  const dreamFactory = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_dreamFactory.js';
  const jdFactory = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_jdfactory.js';
  const small_home = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_small_home.js';
  const necklace = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_necklace.js';
  const syj = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_syj.js';
  const ds = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_ds.js';
  const unsubscribe = 'https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_unsubscribe.js';
  
  await download(url, './');
  await download(crazy_joy, './');
  await download(blue_coin, './');
  await download(club_lottery, './');
  await download(fruit, './');
  await download(joy, './');
  await download(feedpet, './');
  await download(reward, './');
  await download(joy_run, './');
  await download(joy_steal, './');
  await download(moneyTree, './');
  await download(pet, './');
  await download(pigpet, './');
  await download(dailyegg, './');
  await download(plantBean, './');
  await download(redPacket, './');
  await download(shop, './');
  await download(speed, './');
  await download(kd, './');
  await download(superMarket, './');
  await download(dreamFactory, './');
  await download(jdFactory, './');
  await download(small_home, './');
  await download(necklace, './');
  await download(syj, './');
  await download(ds, './');
  await download(unsubscribe, './');
}

async function changeFile() {
  let content = await fs.readFileSync('./JD_DailyBonus.js', 'utf8')
  content = content.replace(/var Key = ''/, `var Key = '${KEY}'`);
  if (DualKey) {
    content = content.replace(/var DualKey = ''/, `var DualKey = '${DualKey}'`);
  }
  await fs.writeFileSync('./JD_DailyBonus.js', content, 'utf8')
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
  await changeFile();
  console.log('替换变量完毕')
  // 执行
  await exec("node JD_DailyBonus.js >> result.txt");
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
  await exec("node jd_ds.js >> result.txt");
  await exec("node jd_unsubscribe.js >> result.txt");
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
