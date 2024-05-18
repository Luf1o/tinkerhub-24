import devTeam from "@/data/devTeam";
import TeamCard from "../components/common/TeamCard";
import mediaTeam from "@/data/mediaTeam";

const TeamMainPage = () => {
  return (
    <div className="py-5">
      <TeamCard
        leadName={devTeam.leadName}
        teamName={devTeam.teamName}
        desc={devTeam.desc}
        teamLeadImg={devTeam.teamLeadImg}
        teamMembers={devTeam.teamMembers}
      />
      <TeamCard
        leadName={mediaTeam.leadName}
        teamName={mediaTeam.teamName}
        desc={mediaTeam.desc}
        teamLeadImg={mediaTeam.teamLeadImg}
        teamMembers={mediaTeam.teamMembers}
      />
    </div>
  );
};

export default TeamMainPage;
