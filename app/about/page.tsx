import Link from "next/link"

export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="min-h-screen bg-gray-100 p-8">
            <nav className="text-center mb-4">
                <p className="text-2xl font-bold">芝加哥Coffee Chat</p>
            </nav>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-4">关于我们</h1>
                <p className="text-lg text-gray-700 mb-4">
                欢迎来到芝加哥Coffee Chat，我们是一个热情的社区，致力于为大家提供一个相互交流的机会，让每个人都能找到志同道合的朋友。我们相信，一杯咖啡，一场对话，就能让人们互相了解，拉近彼此的心。
                </p>
                <p className="text-lg text-gray-700 mb-4">
                我们每周都会组织各类活动，包括但不限于咖啡聊天会、主题分享会、知识讲座等。我们的目标是提供一个平台，让大家在轻松愉快的氛围中交流思想，分享经验，从而共同成长。
                </p>
                <p className="text-lg text-gray-700 mb-4">
                不论你是咖啡爱好者，还是寻求灵感和创意的朋友，或者只是想找个地方放松心情，芝加哥Coffee Chat都欢迎你的加入。让我们一起享受咖啡带来的乐趣，发现更多有趣的灵魂，共同创造美好的回忆。
                </p>
                <div className="text-center">
                <a href="/" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300 ease-in-out">
                    加入我们
                </a>
                </div>
            </div>
        </section>
      </main>
    )
  }