import { useParams } from "react-router-dom";
import { Diagnosis, Patient } from "../types";
import { useEffect, useState } from "react";
import Male from "@mui/icons-material/Male";
import Female from "@mui/icons-material/Female";

import patientService from "./../services/patients";
import PatientEntry from "./PatientEntry";

const PatientDetailsPage = ({ diagnoses }: {diagnoses: Diagnosis[]}) => {
  const patientId = useParams().patientId;

  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (patientId !== undefined) {
      patientService.getOne(patientId).then((data) => {
        setPatient(data);
      });
    }
  }, [patientId]);

  if (patient === null) {
    return <p style={{ color: "red" }}>error fetching patient</p>;
  }

  return (
    <>
      <p>
        <b style={{ fontSize: 25 }}>{patient.name}</b>
        {patient.gender === "male" ? (
          <Male />
        ) : patient.gender === "female" ? (
          <Female />
        ) : (
          <></>
        )}
        <br />
        ssn: {patient.ssn}
        <br />
        occupation: {patient.occupation}
      </p>
      <b style={{ fontSize: 20 }}>Entries</b>
      <ul>
        {patient.entries.map((e) => {
          return <PatientEntry key={e.id} entry={e} diagnoses={diagnoses} />;
        })}
      </ul>
    </>
  );
};

export default PatientDetailsPage;
