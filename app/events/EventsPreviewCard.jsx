'use client';
import { useState, useEffect } from "react";
import EventCard from "../components/common/EventCard";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { collection,getDocs,onSnapshot } from "firebase/firestore";
import { db,auth,storage } from "../firebase/config";
import { ref,listAll,getDownloadURL } from "firebase/storage";

function EventPreviewCard(){

    const router = useRouter();
    const imageList = ref(storage, 'images/')

    let tempeventList = [
        {
            title: 'Event 1',
            id: 1,
        },
        {
            title: 'Event 2',
            id: 2,
        },
        {
            title: 'Event 3',
            id: 3,
        },
        {
            title: 'Event 4',
            id: 4,
        },
        {
            title: 'Event 5',
            id: 5,
        },
        {
            title: 'Event 6',
            id: 6,
        },
    ]


    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        const fetchEventData = async () => {
            if (eventList.length > 0) {
                return;
            }
            const eventsCollection = collection(db, "events");
            const eventsSnapshot = await getDocs(eventsCollection);
            const eventsData = eventsSnapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
            console.log(eventsData);
            //code to get image urls and add to eventsData
            // const imageList = ref(storage, 'images/');
            // const imageUrls = [];
            // const imageListRef = await listAll(imageList);
            // imageListRef.items.forEach(async (itemRef) => {
            //     const url = await getDownloadURL(itemRef);
            //     imageUrls.push(url);
            // });
            // for (let i = 0; i < eventsData.length; i++) {
            //     eventsData[i].image = imageUrls[i];
            // }
            setEventList(eventsData);
        };
        fetchEventData();
        // console.log(eventList);
    }, [eventList]);

    // Rest of the code...


    return(
        <div>
            <div className='w-screen h-16 lg:h-24 bg-white my-5 flex items-center'>
                <nav className="flex border-2 gap-10 w-full h-full justify-center lg:justifiy-evenly items-center 0 text-black text-sm lg:text-2xl ">
                    <div className='w-1 h-9 bg-red-600'></div>
                        <div><span>EVENTS</span></div>
                        <div><span>WORKSHOP</span></div>
                        <div><span>PAST EVENTS</span></div>
                </nav>
            </div>
            <div className="flex flex-wrap gap-10 lg:max-h-max lg:max-w-full place-content-center"> 
            {
                eventList.map((event,i) => {
                    return (
                        <div key={i}>
                            <Link href={
                                {
                                    pathname: `/eventDisplay/`,
                                    query: {
                                        name: event.name,
                                        date: event.date,
                                        fees: event.fees,
                                        img: event.img,
                                        cordinator: event.cordinator,
                                        fcordinator: event.faculty_coordinator,
                                        venue: event.venue,
                                    }
                                }
                            } > 
                                <EventCard />
                            </Link>
                        </div>
                    )
                })
            }           
        </div>
        </div>
    )
}
export default EventPreviewCard;