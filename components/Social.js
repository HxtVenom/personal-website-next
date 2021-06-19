
export default function Social ({socials, size}) {
  return (
    <div className="flex flex-wrap space-x-5 md:m-0 mx-auto">
      {
        socials.map(social => {
          if(social.name == "github"){ // GITHUB
            return (
              <a key={social.name} href={social.link}>
                <svg className="fill-current hover:text-green-500 hover:opacity-75" viewBox="0 0 24 24" height={size} width={size}>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.236-.009-.866-.014-1.699-2.782.602-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.909-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.251-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.307.679.917.679 1.852 0 1.335-.012 2.415-.012 2.741 0 .269.18.579.688.481A9.997 9.997 0 0022 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
            )
          }else if(social.name == "linkedin"){ // LinkedIn
            return (
              <a key={social.name} href={social.link}>
                <svg className="fill-current hover:text-green-500 hover:opacity-75" viewBox="0 0 24 24" height={size} width={size}>
                <g><path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"/></g>
                </svg>
              </a>
            )
          }else if(social.name == "email"){ // Email
            return (
              <a key={social.name} href={social.link}>
                <svg className="fill-current hover:text-green-500 hover:opacity-75" viewBox="0 0 24 24" height={size} width={size}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.236l-8 4.882-8-4.882V6h16v2.236z"/></g></svg>
                </svg>
              </a>
            )
          }else if(social.name == "twitch"){ // Twitch
            return (
              <a key={social.name} href={social.link}>
                <svg className="fill-current hover:text-green-500 hover:opacity-75" viewBox="0 0 24 24" height={size} width={size}>
                <g><path d="M16.499 8.089h-1.636v4.91h1.636v-4.91zm-4.499 0h-1.637v4.91H12v-4.91zM4.228 3.178L3 6.451v13.092h4.499V22h2.456l2.454-2.456h3.681L21 14.636V3.178H4.228zm15.136 10.638L16.5 16.681H12l-2.453 2.453V16.68H5.863V4.814h13.501v9.002z"/></g>
                </svg>
              </a>
            )
          }else if(social.name == "medium"){ // Medium
            return (
              <a key={social.name} href={social.link}>
                <svg className="fill-current hover:text-green-500 hover:opacity-75" viewBox="0 0 24 24" height={size} width={size}>
                <g><path d="M3 3v18h18V3H3zm15 4.26l-1 .93a.28.28 0 00-.11.27v6.8a.27.27 0 00.11.27l.94.93v.2h-4.75v-.2l1-1c.09-.1.09-.12.09-.27V9.74l-2.71 6.9h-.37L8 9.74v4.62a.67.67 0 00.17.54l1.27 1.54v.2H5.86v-.2l1.27-1.54a.64.64 0 00.17-.54V9a.5.5 0 00-.16-.4L6 7.26v-.2h3.52L12.23 13l2.38-5.94H18v.2z"/></g>
                </svg>
              </a>
            )
          }else if(social.name == "twitter"){ // Twitter
            return (
              <a key={social.name} href={social.link}>
                <svg className="fill-current hover:text-green-500 hover:opacity-75" viewBox="0 0 24 24" height={size} width={size}>
                <g><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2.534 6.71c.004.099.007.198.007.298 0 3.045-2.318 6.556-6.556 6.556a6.52 6.52 0 01-3.532-1.035 4.626 4.626 0 003.412-.954 2.307 2.307 0 01-2.152-1.6 2.295 2.295 0 001.04-.04 2.306 2.306 0 01-1.848-2.259v-.029c.311.173.666.276 1.044.288a2.303 2.303 0 01-.713-3.076 6.54 6.54 0 004.749 2.407 2.305 2.305 0 013.926-2.101 4.602 4.602 0 001.463-.559 2.31 2.31 0 01-1.013 1.275c.466-.056.91-.18 1.323-.363-.31.461-.7.867-1.15 1.192z"/></g>
                </svg>
              </a>
            )
          }else if(social.name == "share"){ // Share
            return (
              <a key={social.name} href={social.link}>
                <svg className="fill-current hover:text-green-500 hover:opacity-75" viewBox="0 0 24 24" height={size} width={size}>
                <g><path d="M18 16c-.788 0-1.499.31-2.034.807L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.048 4.118A2.981 2.981 0 0015 19a3 3 0 103-3z"/></g>
                </svg>
              </a>
            )
          }else if(social.name == "tiktok"){ // TikTok
            return (
              <a key={social.name} href={social.link}>
                <svg className="fill-current hover:text-green-500 hover:opacity-75" viewBox="0 0 24 24" height={size} width={size}>
                <g><path d="M12.22 2h3.42s-.19 4.394 4.75 4.702v3.396s-2.636.166-4.75-1.448l.037 7.011a6.338 6.338 0 11-6.34-6.338h.89v3.472a2.882 2.882 0 102.024 2.752L12.22 2z"/></g>
                </svg>
              </a>
            )
          }else if(social.name == "print"){ // Print
            return (
              <a key={social.name} href={social.link}>
                <svg className="fill-current hover:text-green-500 hover:opacity-75" viewBox="0 0 24 24" height={size} width={size}>
                <g><path d="M9 16h6v2H9v-2zm13 1h-3v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3H2V9a2 2 0 012-2h1V5a2 2 0 012-2h10a2 2 0 012 2v2h1a2 2 0 012 2v8zM7 7h10V5H7v2zm10 7H7v6h10v-6zm3-3.5a1.5 1.5 0 10-3.001.001A1.5 1.5 0 0020 10.5z"/></g>
                </svg>
              </a>
            )
          }
        })
      }
    </div>
  )
}