import dynamic from "next/dynamic"

const DynamicDashboard = dynamic(
  () => import('@/components/dashboard'),
  { ssr: false }
)

function AdminPage() {
  return (
    <>
      <DynamicDashboard />
    </>
  )
}

export default AdminPage