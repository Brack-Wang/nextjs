
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


{/*   #################################################################################################################### */}
      {/* TODO: Change the content for weekly events' information below */}
      {/* Event Details Replacement Start */}
      <h2 className="text-2xl font-bold mb-2">【本周安排】报名中</h2>
      <h2 className="text-2xl font-bold mb-2">4/13 周六 3:30 PM - 5:00 PM</h2>
      <p className="mb-4">WhirlyBall<br />（坐着碰碰车拿着拍子玩篮球）<a href="https://www.whirlyball.com/" target="_blank" className="text-blue-500 hover:text-blue-700">了解更多</a><br />限定报名人数：14人</p>
      <p className="mb-4">地点：WhirlyBall Chicago<br />📍1825 W Webster Ave, Chicago, IL 60614</p>
      <a href="https://www.eventbrite.com/e/cfcht413-330pm-500pm-whirlyball-chicago-tickets-880615002177" target="_blank" className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">报名🔗</a>
      <p className="mt-4">价格：$税后24.57/人<br />Zelle: Tianyou Luo, 4707753396</p>
      <p className="mt-4">*定金已付好，到店后管理员会付完全款</p>
      <p className="mt-4">*因为之前活动出现过报名后未出现而造成损失的情况，所以咱们这次提前AA门票</p>
      <p className="mt-4">*请报名成功后于周三11:59pm前zelle，备注Eventbrite报名名字，否则将取消名额</p>
      <p className="mt-4">*如果报名后临时有事无法出席，请联系群里其他小伙伴进行转票哦</p>
      <p className="mt-4 font-bold">那么各位，这周六见！🌞</p>




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
