import Sidebar from "../Components/Sidebar";

export default function DashboardLayout({children,}: Readonly<{children: React.ReactNode;}>)
{
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-700 selection:bg-blue-600 selection:text-white">
    <div className="flex ">
        <div>
          <Sidebar />
        </div>

        {children}
        
      
    </div>
</div>
  )
    
}