import { Flex, ScrollArea,Box,Text } from "@radix-ui/themes";
import React from "react";

const Crea1 = () => {
  return (
    <div className=" bg-neutral-500 w-full flex items-center justify-around p-6  ">
      <div className="w-3/6 bg-neutral-300  ">
        <div className="flex items-end justify-center mb-5">
          <div className="w-1/3">
            <h3>Greta</h3>
          </div>
          <div className="w-1/3">
            <ul className="flex space-x-3">
              <li>menu</li>
              <li>bonjour</li>
              <li>test</li>
            </ul>
          </div>

          <div className="w-1/3 flex items-center justify-end ">
            <button className="">voir</button>
          </div>
        </div>

        <div className="flex relative">
          <div className="w-1/3 flex flex-col items-center justify-center">
            <div className="absolute left-0 ml-20 bottom-30">
              <p>édition 01</p>
              <h1 style={{ fontSize: "5rem" }}>Greta made </h1>
              <h1 style={{ fontSize: "5rem", marginLeft: "5rem" }}>
                {" "}
                betta with
              </h1>
            </div>
          </div>

          <div className="w-2/3 bg-orange-300 flex justify-end px-3">
            <img
              src=""
              alt=""
              className="bg-orange-600 "
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>

        <div className="w-full flex ">
            
          <div className="w-1/2 p-10">intro</div>
          <div className="w-1/2 p-10 text-justify">
            On sait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions, et empêche de se
            lettres plus ou moins normale, et en tout cas comparable avec celle
            du français standard.
          </div>
        </div>

        <div className=" bg-neutral-400 flex  ">
          <div className="p-10 w-2/3">
            <h3 className="text-justify">
              On sait depuis longtemps que travailler avec du texte lisible et
              contenant du sens est source de distractions, et empêche de se
              lettres plus ou moins normale, et en tout cas comparable avec
              celle du français standard.
            </h3>
            <p className="mt-3">Who we are</p>
          </div>

          <div className="w-1/3">ffgsd</div>
        </div>
      </div>
{/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}


      <div className="w-2/6 bg-black">
<ScrollArea type="always" scrollbars="vertical" style={{ height: 1000 }}>
<Box >

    <Text as="div">
        <div
          className="w-full relative flex bg-slate-200 border border-black "
          style={{ height: "30rem" }}
        >
            <div className="absolute  bg-green-600"  style={{height:"50px", width:"50px",borderRadius:"50%",left:"50%"}}></div>
            <div className="absolute bottom-0" style={{color:"white",height:"50px", width:"50px",borderRadius:"50%"}}>
                <h1  >01.</h1>
            </div>
            
          <div className="w-1/2 bg-red-500"></div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex w-3/4 border-b-2   m-3 border-gray-300 hover:border-gray-500 ">
                    <div style={{fontSize:".7rem"}} >01</div>
                    <div className="ml-4"> <a href="#"><h3>chosse</h3></a> </div>
              </div>

              <div className="flex w-3/4 border-b-2  m-3 border-gray-300 hover:border-gray-500 ">
                    <div style={{fontSize:".7rem"}} >02</div>
                    <div className="ml-4"> <a href="#"><h3>chosse</h3></a> </div>
              </div>

              <div className="flex w-3/4 border-b-2  m-3 border-gray-300 hover:border-gray-500 ">
                    <div style={{fontSize:".7rem"}} >03</div>
                    <div className="ml-4"> <a href="#"><h3>chosse</h3></a> </div>
              </div>

              <div className="flex w-3/4 border-b-2  m-3 border-gray-300 hover:border-gray-500 ">
                    <div style={{fontSize:".7rem"}} >04</div>
                    <div className="ml-4"> <a href="#"><h3>chosse</h3></a> </div>
              </div>

            </div>
          </div>
        </div>
        <div
          className="w-full  border border-black "
          style={{ height: "30rem" }}
        ></div>
        <div
          className="w-full bg-slate-200 border border-black "
          style={{ height: "30rem" }}
        ></div>
        <div className="w-full border-black " style={{ height: "30rem" }}></div>

    </Text>


</Box>

</ScrollArea>

      </div>

     





    </div>
  );
};

export default Crea1;
