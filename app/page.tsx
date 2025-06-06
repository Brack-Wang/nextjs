
// pages/page.tsx or any other file within the pages directory
import Link from 'next/link';
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold"> Chicago Coffee Chat</code>
          &nbsp;You need, we see, we achieve&nbsp;and  welcome!
        </p>
      </div>

      <div className="mt-20 my-12 p-4 md:p-6 max-w-xs md:max-w-2xl lg:max-w-4xl w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center">
        <h2 className="text-2xl font-bold mb-2"> 芝加哥CFCHT </h2>


{/* Event Details Replacement Start */}
{/*   <h2 className="text-2xl font-bold mb-2">【芝加哥CFCHT】报名中</h2>
  <h2 className="text-2xl font-bold mb-2">6/1 周日 11AM - 12:30PM 冥想香薰制作：Resilience</h2>
  <p className="mb-4">报名人数：8人<br />🕯️自己挑香味！12oz<br />团购价：$27.57/人（含税）</p>
  <p className="mb-4">📍Uni Uni Bubble Tea - Wick Park<br />1415 N Milwaukee Ave Unit 1, Chicago, IL 60622</p>
  <p className="mt-4">Zelle:<br />Qiong Yin<br />yin_chloe@icloud.com</p>
  <a href="https://www.eventbrite.co.nz/e/cfcht61-11-1230-resilience-tickets-1383115468599?aff=oddtdtcreator" target="_blank" className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">报名🔗</a>
  <p className="mt-4">*周末比较热闹，街pa的朋友们建议提前30分钟左右到找车位，我们11点准时开始</p>
  <p className="mt-4">*如报名后无法出席，请联系群里其他小伙伴，进行转票</p>
  <p className="mt-4">*请在eventbrite报名成功后，当天22点前向管理员转Zelle，否则将取消名额</p>
  <p className="mt-4 font-bold">大家周日见！🌞</p>
  <p className="mt-4 font-bold">固定报名时间：每周三8PM</p> */}

  {/* TODO: Change the content for weekly events' information below */}
{/* Event Details Replacement Start */}
  <h2 className="text-2xl font-bold mb-2">【本周安排】报名中</h2>
  <h2 className="text-2xl font-bold mb-2">6/8 周日 1:00 PM - ??:?? PM</h2>
  <p className="mb-4">🔥夏季Hiking!</p>
  <p className="mb-4">地点：Matthiessen State Park<br />📍2500 IL-178, Oglesby, IL 61348</p>

  <a href="https://www.eventbrite.com/e/hiking-cfcht-sunday-tickets-1400553105039?aff=oddtdtcreator" target="_blank" className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">报名🔗</a>

  <p className="mt-4">*报名成功后，如无法出席请在eventbrite取消，并告知管理员 Frank</p>

  <p className="mt-4 font-bold">活动简介：</p>
  <p className="mt-4">Car pool 在市区接人，大概中午从DT出发，下午1点在停车场集合，依照情况决定其中一条路线：</p>
  <ul className="list-disc list-inside mb-4">
    <li>Dells Area to Vermillion River Area Loop（预计 1 小时，难度 Moderate）</li>
    <li>Dells Canyon and Bluff Trail（预计 2 小时30 分钟，难度 Moderate）</li>
  </ul>

  <p className="mt-4 font-bold">固定报名时间：每周三8PM</p>
{/* Event Details Replacement End */}

{/* Event Details Replacement End */}





<p className="mt-4 font-bold">欢迎👏点击⬇️Groups进入小红书和二手群🌞：</p>
{/* Event Details Replacement End */}




{/*   #################################################################################################################### */}

        
      </div>

      {/* Button of About and Events Start*/}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Knowing about us!
          </p>
        </Link>
        <Link
          href="/events"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Events{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            All previous events we hold!
          </p>
        </Link>

        <Link
          href="/groups"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Groups{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            All groups we share!
          </p>
        </Link>
        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
      {/* Button of About and Events End*/}

    </main>
  );
}
