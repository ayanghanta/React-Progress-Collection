import { calculateBMI } from "./helper";

export default function Footer({ candidates }) {
  const totalCandidate = candidates.length;
  const bmiList = candidates.map((cand) =>
    calculateBMI(cand.weight, cand.height, cand.unit)
  );
  const numUnerW = bmiList.filter((b) => b < 18.5).length;
  const numNormal = bmiList.filter((b) => b >= 18.5 && b < 25).length;
  const numOverW = bmiList.filter((b) => b >= 25 && b < 30).length;
  const numObse = bmiList.filter((b) => b >= 30).length;

  return (
    <div className="footer">
      <p>
        🟤Under weight:{numUnerW} | 🟢Normal: {numNormal} | 🟠Over Weight:
        {numOverW} | 🔴Obese: {numObse}
      </p>
      <p>Out of total {totalCandidate} gym members</p>
    </div>
  );
}
