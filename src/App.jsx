import React from "react"
import Card from "./components/Card"
function App() {
  const data=[
  {
    plan:"Free",
    price:"0/month",
    user:"Single User",
    isUser:true,
    storage:"5GB Storage",
    isStorage:true,
    publicproject:"Ultimate Public Project",
    isPublicProject:true,
    communityAccess:"Community Access",
    isCommunityAccess:true,
    privateProject:"Ultimate Private Project",
    isPrivateProject:false,
    support:"Dedicated Phone Support",
    isSupport:false,
    subDomain:"Free Subdomain",
    isSubDomain:false,
    reports:"Monthly Status Reports",
    isReports:false
  },
  {
    plan:"PLUS",
    price:"9/month",
    user:"5 User",
    isUser:true,
    storage:"5GB Storage",
    isStorage:true,
    publicproject:"Ultimate Public Project",
    isPublicProject:true,
    communityAccess:"Community Access",
    isCommunityAccess:true,
    privateProject:"Ultimate Private Project",
    isPrivateProject:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    subDomain:"Free Subdomain",
    isSubDomain:true,
    reports:"Monthly Status Reports",
    isReports:false
  },
  {
    plan:"PRO",
    price:"49/month",
    user:"Unlimited User",
    isUser:true,
    storage:"150GB storage",
    isStorage:true,
    publicproject:"Ultimate Public Project",
    isPublicProject:true,
    communityAccess:"Community Access",
    isCommunityAccess:true,
    privateProject:"Ultimate Private Project",
    isPrivateProject:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    subDomain:"Ultimate Subdomain",
    isSubDomain:true,
    reports:"Monthly Status Reports",
    isReports:true
  }
]
  return <>
        <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((e,i)=>{
              return<Card data={e}key={i}/>
            })
          }
      
        </div>
      </div>
    </section>
  </>
  
}
export default App
