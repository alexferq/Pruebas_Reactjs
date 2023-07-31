import './assets/App.css'
import { TwitterFollowCard } from './TwitterFolowCard'
export function App(){
    const formatUserName = (userName) => `@${userName}`
    return (
       <section className="App">
             <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing  
                userName="midudev">
                Miguel Angel Duran
             </TwitterFollowCard> 
             <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName="pheralb">
               Pablo Hernandez   {/*children estodo lo que envuelve el componente y puede ser un elemento o varios componentes */}
             </TwitterFollowCard> 
             <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing={false}  
                userName="vxnder">
                Vanderhart
            </TwitterFollowCard> 
            
       </section>
    )
}