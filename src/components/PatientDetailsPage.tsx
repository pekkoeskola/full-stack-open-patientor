import { useParams } from "react-router-dom";
import { Patient } from "../types";
import { useEffect, useState } from "react";
import Male from "@mui/icons-material/Male";
import Female from "@mui/icons-material/Female";

import patientService from "./../services/patients";

const PatientDetailsPage = () => {
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
    <p>
      <b>{patient.name}</b>{patient.gender === "male" ? <Male /> : patient.gender === "female" ? <Female />: <></>}
      <br />
      ssn: {patient.ssn}
      <br />
      occupation: {patient.occupation}
    </p>
  );
};

export default PatientDetailsPage;
