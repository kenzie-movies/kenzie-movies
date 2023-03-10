import { Link } from "react-router-dom";
import { InitialPageListStyle } from "./style";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const InitialPageList = () => {
  return (
    <InitialPageListStyle>
      <li>
        <img
          src="https://media.licdn.com/dms/image/C4E03AQEgNVjlJb3TqQ/profile-displayphoto-shrink_800_800/0/1658424153713?e=1683763200&v=beta&t=KhXMx0ZmL7qDR9QsWeTgCy1TGj3ttorXijR2949VQgw"
          alt="Daniel Mello"
        />
        <div>
          <h3>Daniel Mello</h3>
          <Link
            className="linkedin_icon"
            target={"_blank"}
            to={"https://www.linkedin.com/in/daniel-mello-68b32a180/"}>
            <FaLinkedin size={50} />
          </Link>
          <Link
            className="github_icon"
            target={"_blank"}
            to={"https://github.com/orgs/kenzie-movies/people/DMCFaria"}>
            <FaGithub size={50} />
          </Link>
        </div>
      </li>

      <li>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHokTqCZ1fysw/profile-displayphoto-shrink_800_800/0/1669401716680?e=1683763200&v=beta&t=Kdi8ml_G_pByscOKmTfON_f3zqbTozy_wEFWyXR1rjQ"
          alt="Isabel Paiva"
        />
        <div>
          <h3>Isabel Paiva</h3>
          <Link
            className="linkedin_icon"
            target={"_blank"}
            to={"https://www.linkedin.com/in/isabelpaivas/"}>
            <FaLinkedin size={50} />
          </Link>
          <Link
            className="github_icon"
            target={"_blank"}
            to={"https://github.com/orgs/kenzie-movies/people/isabelpaiva"}>
            <FaGithub size={50} />
          </Link>
        </div>
      </li>

      <li>
        <img
          src="https://media.licdn.com/dms/image/C4D03AQHVRM_l5_jY3A/profile-displayphoto-shrink_800_800/0/1658425754879?e=1683763200&v=beta&t=BO8ht3l-oxqMFiLPRxNDz7R2scyTs3gPDHpbMrcyu9k"
          alt="Onésimo Brito"
        />
        <div>
          <h3>Onésimo Brito</h3>
          <Link
            className="linkedin_icon"
            target={"_blank"}
            to={"https://www.linkedin.com/in/onsbrito/"}>
            <FaLinkedin size={50} />
          </Link>
          <Link
            className="github_icon"
            target={"_blank"}
            to={"https://github.com/orgs/kenzie-movies/people/briito"}>
            <FaGithub size={50} />
          </Link>
        </div>
      </li>

      <li>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHR9h3iFyC_uA/profile-displayphoto-shrink_800_800/0/1669823865379?e=1683763200&v=beta&t=WaMVcCRcTIwknnQF9RbAlaYxeX72ZhIoZbDx8FIbeW0"
          alt="Roger Magalhães"
        />
        <div>
          <h3>Roger Magalhães</h3>
          <Link
            className="linkedin_icon"
            target={"_blank"}
            to={"https://www.linkedin.com/in/rogermferr/"}>
            <FaLinkedin size={50} />
          </Link>
          <Link
            className="github_icon"
            target={"_blank"}
            to={"https://github.com/orgs/kenzie-movies/people/Rogermferr"}>
            <FaGithub size={50} />
          </Link>
        </div>
      </li>
    </InitialPageListStyle>
  );
};

export default InitialPageList;
