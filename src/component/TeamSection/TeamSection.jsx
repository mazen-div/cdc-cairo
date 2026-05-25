import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useState, useEffect, useCallback } from "react";
import { db } from "../../firebase";

import Arrows from "../../Icons/Arrows";

const TeamSlider = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchTeam = async () => {
      try {
        const collectionRef = collection(db, "OurDoctors", "Doctors", "Cards");
        const orderedQuery = query(collectionRef, orderBy("order", "asc"));
        const snapshot = await getDocs(orderedQuery);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (isMounted) {
          setTeamMembers(data);
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeam();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleNavigate = useCallback(
    (member) => navigate("/OurTeam", { state: member }),
    [navigate]
  );

  return (
    <div className="container">
      <div className="team-container" id="team">
        <div className="team-header">
          <section className="OurClinc" id="team">
            <h2>MEET THE TEAM</h2>
            <div className="linerGrad"></div>
          </section>
        </div>

        {teamMembers.length > 0 && (
          <div className="team-slider-wrapper">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              navigation={{ nextEl: ".NeArrow", prevEl: ".PeArrow" }}
              pagination={{ clickable: true }}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              className="team-swiper"
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                576: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 25 },
                1400: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="team-card" onClick={() => handleNavigate(member)}>
                    <div className="team-image-container">
                      <img src={member.firstImageUrl} alt="Doctor" />
                    </div>
                    <div className="team-info">
                      <p className="team-name">{member.Name}</p>
                      <p className="team-title">{member.Title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="ArrowContainer" id="TAC">
              <div className="PeArrow">
                <Arrows />
              </div>
              <div className="NeArrow" id="nextErr">
                <Arrows />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSlider;
