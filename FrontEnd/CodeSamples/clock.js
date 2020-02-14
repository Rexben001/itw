const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {

      setTime(new Date());
    }, 1000);
  }, []);

  const hours =  time.getHours;
  const minutes = time.getMinutes;
  const seconds = time.getSeconds;

return <div style={{ color: time.getSeconds % 2 ? "blue" : "white" }}>{hours}: {minutes}: {seconds}</div>;
};
