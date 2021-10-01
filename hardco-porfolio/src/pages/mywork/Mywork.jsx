import { useState } from "react"
import Product from '../../components/product/Product'
import Userflow from '../../components/userflow/Userflow'
import Story from '../../components/story/Story'
import FinalDesign  from '../../components/finalDesign/FinalDesign'
import System  from '../../components/system/System'
import TopbarWork  from '../../components/topbarwork/TopbarWork'
import MenuWork from '../../components/menuwork/MenuWork'
import './mywork.scss'
import { useParams} from "react-router-dom"
// import { webPorfolio} from '../../work'
import { useTranslation } from 'react-i18next'
function Mywork() {
    const { title } = useParams()
    const { t } = useTranslation();
    // const location = useLocation();
    console.log(title)
    const webPorfolio = [
      {
          "title":"HardCo.Social",
          "productImg":"assets/facebookClone/facebookClone_5.png",
          "desc":t("social-Desc"),
          "video":"demo.mp4",
          "url":"https://hardco-social.xyz/",
          "featured":[
              {
                  "title":t("social-feature1")
              },
              {
                  "title":t("social-feature2")
              },
              {
                  "title":t("social-feature3")
              }
          ],
          "story":[
              {
                  "title":t("social-story1")
              },
              {
                  "title":t("social-story2")
              },
              {
                  "title":t("social-story3")
              },
              {
                  "title":t("social-story4")
              }
          ],
          "userflow":[
              {
                  "img":"assets/facebookClone/userflow1.png"
              },
              {
                  "img":"assets/facebookClone/userflow2.png"
              }
          ],
          "system":[
              {
                  "languageIcon":"assets/system/reactIcon.png",
                  "width":"150px",
                  "height":"150px",
                  "library":[
                      {
                          "title":"React-Hook"
                      },
                      {
                          "title":"React-Responsive"
                      },
                      {
                          "title":"React-Router-dom"
                      },
                      {
                          "title":"Socket.io-client"
                      },
                      {
                          "title":"React-jwt"
                      },
                      {
                          "title":"React-infinite-scroll-component"
                      },
                      {
                          "title":"axios"
                      }
                  ]
              },
              {
                  "languageIcon":"assets/system/expressIcon.png",
                  "width":"150px",
                  "height":"150px",
                  "library":[
                      {
                          "title":"cors"
                      },
                      {
                          "title":"express-jwt"
                      },
                      {
                          "title":"express-validator"
                      },
                      {
                          "title":"helmet"
                      },
                      {
                          "title":"jsonwebtoken"
                      },
                      {
                          "title":"socket.io"
                      }
                  ]
              },
              {
                  "languageIcon":"assets/system/MongoDBIcon.jpeg",
                  "width":"150px",
                  "height":"150px",
                  "library":[
                      {
                          "title":"Mongoose"
                      }
                  ]
              }
          ],
          "finalDesign":[
              {
                  "link":"assets/facebookClone/S__45096962.jpg"
              },
              {
                  "link":"assets/facebookClone/S__45096964.jpg"
              },
              {
                  "link":"assets/facebookClone/S__45096965.jpg"
              },
              {
                  "link":"assets/facebookClone/S__45096966.jpg"
              },
              {
                  "link":"assets/facebookClone/S__45096967.jpg"
              },
              {
                  "link":"assets/facebookClone/S__45096968.jpg"
              },
              {
                  "link":"assets/facebookClone/S__45096969.jpg"
              },
              {
                  "link":"assets/facebookClone/S__45096970.jpg"
              },
              {
                  "link":"assets/facebookClone/S__45096971.jpg"
              },
              {
                  "link":"assets/facebookClone/S__45096972.jpg"
              }
          ]
      },
      {
          "title":"HardCo.Todo",
          "productImg":"assets/todo/hardco-todo_1.png",
          "video":"todo_2.mov",
          "url":"http://5.181.217.243:3000",
          "desc":t("todo-Desc"),
          "featured":[
              {
                  "title":t("todo-feature1")
              },
              {
                  "title":t("todo-feature2")
              },
              {
                  "title":t("todo-feature3")
              },
              {
                  "title":t("todo-feature4")
              }
          ],
          "story":[
              {
                  "title":t("todo-story1")
              },
              {
                  "title":t("todo-story2")
              },
              {
                  "title":t("todo-story3")
              }
          ],
          "userflow":[
              {
                  "img":"assets/todo/userflow1.png"
              },
              {
                  "img":"assets/todo/userflow2.png"
              }
          ],
          "system":[
              {
                  "languageIcon":"assets/system/reactIcon.png",
                  "library":[
                      {
                          "title":"React-Hook"
                      },
                      {
                          "title":"typescript"
                      },
                      {
                          "title":"formik"
                      },
                      {
                          "title":"i18next"
                      },
                      {
                          "title":"react-redux"
                      },
                      {
                          "title":"@material-ui"
                      },
                      {
                          "title":"axios"
                      }
                  ]
              },
              {
                  "languageIcon":"assets/system/expressIcon.png",
                  "library":[
                      {
                          "title":"cors"
                      },
                      {
                          "title":"pg"
                      },
                      {
                          "title":"express-session"
                      }
                  ]
              },
              {
                  "languageIcon":"assets/system/postgresql.png",
                  "library":[
                      {
                          "title":"type-orm"
                      }
                  ]
              },
              {
                  "languageIcon":"assets/system/docker.png",
                  "library":[
                      {
                          "title":"docker-compose"
                      }
                  ]
              }
          ],
          "finalDesign":[
              {
                  "link":"assets/todo/S__45105156.jpg"
              },
              {
                  "link":"assets/todo/S__45105158.jpg"
              },
              {
                  "link":"assets/todo/S__45105159.jpg"
              },
              {
                  "link":"assets/todo/S__45105160.jpg"
              },
              {
                  "link":"assets/todo/S__45105161.jpg"
              },
              {
                  "link":"assets/todo/S__45105162.jpg"
              },
              {
                "link":"assets/todo/S__45309971.jpg"
              },
              {
                "link":"assets/todo/S__45309972.jpg"
            },
            {
                "link":"assets/todo/S__45309973.jpg"
            },{
                "link":"assets/todo/S__45309969.jpg"
            },

          ]
      }
  ];
    const workData = webPorfolio.find((work)=>work.title===title)
    console.log(workData)
    // const workData = location.state.workData
    const [menuOpen,setMenuOpen] = useState(false)
    return (
      <div className="mywork">
        <TopbarWork menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MenuWork menuOpen={menuOpen} setMenuOpen={setMenuOpen} title={title}/> 
        <div className="sections">
          <Product workData={workData}/>
          <Story workData={workData}/>
          <Userflow workData = {workData}/>
          <System workData={workData}/>
          <FinalDesign workData={workData}/> 
        </div>
      </div>
    );
  }
  
  export default Mywork;
  