
  return (
    <div>
      {!isLoading && <MissionList missions={missions} />}
    </div>
  );
};

export default Missions;
