const roughtEverydayTask = [
  {
    id: "8/28/2024",
    tasks: [
      {
        name: "lunch in product hunt",
        description:
          "i want to make $1000.00 MRR form my first product from 1st month with 80% profit",
        isDone: true,
        id: 15,
      },
    ],
  },
  {
    id: "8/29/2024",
    tasks: [
      {
        name: "go to bye a mac book",
        description: "i want to use to make my development speed fast",
        isDone: true,
        id: 156,
      },
      {
        name: "go to bye a mac book",
        description: "i want to use to make my development speed fast",
        isDone: false,
        id: 151,
      },
      {
        name: "go to bye a mac book",
        description: "i want to use to make my development speed fast",
        isDone: true,
        id: 154,
      },
    ],
  },
];

export default function Stats({ everyDaysLog, goalObj }) {
  const timeDifference =
    new Date(`${goalObj.achiveDate}T23:59:59`).getTime() - goalObj.startingDay;
  const days = Math.floor(timeDifference / (24 * 3600 * 1000));
  const maxStar = days * goalObj.taskPD;
  const maxGreateStar = days;

  let totalEarnedStar;
  totalEarnedStar = everyDaysLog
    .map((eachDay) => eachDay.tasks)
    .flat()
    .filter((task) => task.isDone).length;
  if (totalEarnedStar > maxStar) totalEarnedStar = maxStar;

  const totalGreatStarEarned = everyDaysLog
    .map((eachDay) => eachDay.tasks)
    .map((tasks) => tasks.every((task) => task.isDone))
    .filter((allDone) => allDone).length;

  //  Formula for total progress totalStarEarned*100/maxStar

  return (
    <div className="stats__container">
      <p>📊 Progress Dashboard</p>
      <div>
        <span>⭐ Stars Earned:</span>
        <span>
          {totalEarnedStar}/{maxStar}
        </span>
      </div>
      <div>
        <span>🌟 Great Stars Earned:</span>
        <span>
          {totalGreatStarEarned}/{maxGreateStar}
        </span>
      </div>
      <div>
        <span>🎯 Goal Progress:</span>
        <span>{Math.floor((totalEarnedStar * 100) / maxStar)}%</span>
      </div>
      <div>
        <span>🚫 Tasks Skipped:</span>
        <span>{maxStar - totalEarnedStar}</span>
      </div>
    </div>
  );
}
