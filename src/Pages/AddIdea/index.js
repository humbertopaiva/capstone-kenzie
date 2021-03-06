import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../Components/Input-add-idea";
import { InputBottom } from "../../Components/inputBottom-add-idea";
import { Textarea } from "../../Components/Textarea-add-idea";
import { useAddIdea } from "../../Providers/Add-Idea";

import { DivAddidea } from "./style.js";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import { useLogin } from "../../Providers/Login";
import { Redirect } from "react-router-dom";

const AddIdea = () => {
  const schema = yup.object().shape({
    video: yup.string(),
    about: yup.string().required("Descrição obrigatória"),
    coreBusiness: yup.string().required("Campo obrigatório"),
    payback: yup.string(),
    valuation: yup.string(),
    document: yup.string(),
    website: yup.string(),
    facebook: yup.string(),
    instagram: yup.string(),
    linkedin: yup.string(),
    twitter: yup.string(),
    ideaValue: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { userAddIdea } = useAddIdea();
  const { user } = useLogin();
  const [video, setVideo] = useState();

  if (!user) {
    return <Redirect to="/" />;
  }
  if (user.user.type === "investor") {
    return <Redirect to="/dashboard/investidor" />;
  }

  const onSubmitFunction = (data) => {
    const {
      video,
      coreBusiness,
      payback,
      valuation,
      document,
      website,
      facebook,
      instagram,
      linkedin,
      twitter,
      ideaValue,
      about,
    } = data;
    const userIdea = {
      idea: {
        video,
        coreBusiness,
        payback,
        valuation,
        document,
        website,
        facebook,
        instagram,
        linkedin,
        twitter,
        ideaValue,
        about,
        exist: true,
      },
    };

    userAddIdea(userIdea);
  };

  const videoLink = (event) => {
    const originalLink = event.target.value;
    const sliceLink = originalLink.slice(-11);
    const link = `https://www.youtube.com/embed/${sliceLink}`;
    setVideo(link);
  };

  return (
    <DivAddidea>
      <section className="container_addIdea-main">
        <main>
          <h2>Adicione a sua ideia</h2>

          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <section>
              <div className="container_addIdea-main-form-video">
                <h4>Adicone um video apresentativo</h4>
                <p>
                  Supreenda seus investidores contando as suas melhores ideias
                  em um vídeo. Sugerimos um material de até 2 min.
                </p>
                <iframe
                  width="100%"
                  height="100%"
                  src={video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <Input
                  type="url"
                  placeholder="Link para o seu video de apresentação no Youtube"
                  onChange={videoLink}
                  register={register}
                  name={"video"}
                />
              </div>

              <div>
                <h4>Sobre</h4>
                <p>
                  Chegou a hora de inspirar os seus investidores com uma bela
                  história sobre a sua iniciativa.
                </p>
                <Textarea
                  height="160"
                  placeholder="Conte mais detalhes sobre a história da sua empresa. Coloque aqui informações relevantes sobre a sua idéia, as pessoas por trás dela e como tudo começou para você."
                  register={register}
                  name={"about"}
                ></Textarea>
              </div>
            </section>

            <section>
              <div className="container_addIdea-main-form-core">
                <h4>Core business</h4>
                <Textarea
                  register={register}
                  name={"coreBusiness"}
                  placeholder="Descreva aqui a principal atividade da sua empresa"
                ></Textarea>
              </div>

              <div className="container_addIdea-main-form-core-itens">
                <div className="container_addIdea-main-form-core-first">
                  <h4>Payback</h4>
                  <p>Coloque aqui o retorno do investimento</p>
                  <Input
                    register={register}
                    name={"payback"}
                    type="text"
                    placeholder="R$"
                  />
                </div>

                <div className="container_addIdea-main-form-core-second">
                  <h4>Valuation</h4>
                  <p>Valor estimado da empresa</p>
                  <Input
                    register={register}
                    name={"valuation"}
                    type="text"
                    placeholder="R$"
                  />
                </div>
              </div>
            </section>

            <section>
              <div>
                <h4>Link útil para documentos e patentes</h4>
                <Input
                  type="url"
                  placeholder="Coloque aqui o endereço para baixar o seu documento"
                  register={register}
                  name={"document"}
                />
              </div>

              <div>
                <h4>Endereço do seu site</h4>
                <Input
                  type="url"
                  placeholder="Coloque aqui o endereço do seu site"
                  register={register}
                  name={"website"}
                />
              </div>
            </section>

            <section>
              <div>
                <h4>Redes Sociais</h4>
              </div>
              <div>
                <div className="container_addIdea-main-form-icons">
                  <figure>
                    <img src={facebook} alt="facebook icon" />
                    <figcaption>facebook icon</figcaption>
                  </figure>
                  <small>facebook/</small>
                  <InputBottom
                    register={register}
                    name={"facebook"}
                    type="text"
                  />
                </div>

                <div className="container_addIdea-main-form-icons">
                  <figure>
                    <img src={instagram} alt="instagram icon" />
                    <figcaption>instagram icon</figcaption>
                  </figure>
                  <small>instagram/</small>
                  <InputBottom
                    register={register}
                    name={"instagram"}
                    type="text"
                  />
                </div>
              </div>

              <div>
                <div className="container_addIdea-main-form-icons">
                  <figure>
                    <img src={linkedin} alt="linkedin icon" />
                    <figcaption>linkedin icon</figcaption>
                  </figure>
                  <small>linkedin/</small>
                  <InputBottom
                    register={register}
                    name={"linkedin"}
                    type="text"
                  />
                </div>

                <div className="container_addIdea-main-form-icons">
                  <figure>
                    <img src={twitter} alt="twitter icon" />
                    <figcaption>twitter icon</figcaption>
                  </figure>
                  <small>twitter/</small>
                  <InputBottom
                    register={register}
                    name={"twitter"}
                    type="text"
                  />
                </div>
              </div>
            </section>

            <section className="container_addIdea-main-form-button">
              <div>
                <h4>Valor do investimento na sua ideia</h4>
                <Textarea
                  register={register}
                  name={"ideaValue"}
                  height="100"
                  placeholder="De quanto ou do quê você precisa para viabilizar a sua ideia? Coloque aqui como os investidores podem te ajudar e o que você dará em troca pelo investimento"
                  className="container_addIdea-main-form-button-textarea"
                ></Textarea>
              </div>

              <div>
                <button type="submit">Salvar informações</button>
              </div>
            </section>
          </form>
        </main>
      </section>
    </DivAddidea>
  );
};

export default AddIdea;
