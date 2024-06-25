import Posts from '@/components/puzzle/Posts'
import Layout from '@/layouts/Layout'

const posts = ["https://i.pinimg.com/236x/99/af/a2/99afa23e6077c877375debf0613beb63.jpg", "https://i.pinimg.com/236x/78/7e/25/787e25e0a252e37a5d355cb720cc3142.jpg", "https://i.pinimg.com/236x/9a/b4/d3/9ab4d3bec4f1231a4349a8ddba1b53a0.jpg", "https://i.pinimg.com/236x/f4/e9/fe/f4e9feaa1b1666e7d147317edc67ff68.jpg", "https://i.pinimg.com/236x/de/b4/56/deb45615ed24ca40ff3c7711580e201a.jpg", "https://i.pinimg.com/236x/e8/7b/12/e87b126fea896a4598043f5872631a36.jpg", "https://i.pinimg.com/236x/7f/20/ec/7f20ec061bccca9f81e2c19e1e63ff1c.jpg", "https://i.pinimg.com/236x/d6/0d/ee/d60deef6194ee268ae51977c9d5d3c27.jpg", "https://i.pinimg.com/236x/67/bb/33/67bb33eb29edf0e698185ae743193032.jpg", "https://i.pinimg.com/236x/6a/31/51/6a3151b34e2c9d4c95d977bae96fe8f9.jpg", "https://i.pinimg.com/236x/9d/67/2e/9d672eecab5aa0a18bccc8c15a276877.jpg"]

export default function Home() {
  return (
    <Layout>
      <div className='mt-[75px] p-2'>
        <Posts posts={posts} />
      </div>
    </Layout>
  )
}
