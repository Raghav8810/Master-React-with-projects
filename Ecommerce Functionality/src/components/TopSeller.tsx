import React, { useEffect, useState } from 'react'


interface Author{
        name: string,
        isFollowing: boolean,
        image: string;

}

const TopSeller = () => {
    const[authors, setAuthor] = useState<Author[]>([])

  useEffect(()=> {
    const fetchData = async () => {
        try {
          const res = await fetch("https://randomuser.me/api/?results=5");
        const data = await res.json();
        const authorData : Author[] = data.results.map((user: any) => ({
            name: `${user.name.first}  ${user.name.last}`,
            isFollowing: false,
            image: user.picture.media,
        }))

        setAuthor(authorData)
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
  },[])


  const handleFollowingClick = (index : number) =>{
    setAuthor(prevoius => prevoius.map((author, i)=> index === i ? {...author, isFollowing: !author.isFollowing}: author ))
  }

  return (
    <div className='bg-white p-5 mx-5 mt-[5rem] border w-[23rem] rounded' >
        <h2 className='text-xl font-bold mb-5'>Top Sellers</h2>

        <ul>
            {
                authors.map((author, index) => {
                    return(
                        <>
                          <li key={index} className='flex justify-between items-center mb-4 '>
                            <section className='flex justify-center items-center'>
                                 <img src={author.image} className='w-[25%] h-[25%] rounded-full justify-center' alt="" />
                                 <span className='ml-4'>{author.name}</span>
                            </section>

                            <button onClick={()=> handleFollowingClick(index)} className={`py-1 px-1 rounded ${author.isFollowing ? "bg-red-500 text-white" : "bg-black text-white"}`}>{author.isFollowing ? "unfollow": "follow"}</button>
                          </li>
                        </>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default TopSeller
