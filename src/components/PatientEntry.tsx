import { Diagnosis, Entry } from "../types";

const PatientEntry = ({
  entry,
  diagnoses,
}: {
  entry: Entry;
  diagnoses: Diagnosis[];
}) => {
  return (
    <>
      <li>
        {entry.date} {entry.description}
        <ul>
          {entry.diagnosisCodes !== undefined &&
            entry.diagnosisCodes.map((diagnosisCode) => {
              const diagnosis = diagnoses.find((d) => d.code === diagnosisCode);

              if (diagnosis !== undefined) {
                return (
                  <li key={diagnosisCode}>
                    {diagnosisCode} {diagnosis.name}
                  </li>
                );
              }
            })}
        </ul>
      </li>
    </>
  );
};

export default PatientEntry;
