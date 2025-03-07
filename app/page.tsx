import BootScreen from "@/screens/BootScreen";
import { Landing } from "@/screens/Landing";



export default function Home() {
  return (
    <> 
    <BootScreen />
    <main className="bg-black"> 
    <Landing />
    </main>
    </>
  );
}
