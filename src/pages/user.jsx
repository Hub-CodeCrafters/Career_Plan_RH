import React, { useState } from 'react';
import "../assets/admin.css"
import {
  SortableContext,
} from "@dnd-kit/sortable";
import Columns from "../components/ColumnsUser.jsx/Columns"
import GlobalProvider from '../state/global';
import MenuRutas from '../components/MenuRutas/MenuRutas';
import Setting from '../components/Setting';
import RequisitosUser from '../components/RequisitosUser.jsx/RequisitosUser';



function User() {
  const [profileActive, setProfileActive] = useState("");

  const [columns, setColums] = useState([
    { id: 1, name: 'coluna 1' },
    { id: 2, name: 'coluna 2' },
    { id: 3, name: 'coluna 3' },
    { id: 4, name: 'coluna 4' },
    { id: 5, name: 'coluna 5' },
    { id: 6, name: 'coluna 6' },
    { id: 7, name: 'coluna 7' },
    { id: 8, name: 'coluna 8' },
    { id: 9, name: 'coluna 9' },
    { id: 10, name: 'coluna 10' },
    { id: 11, name: 'coluna 11' },
    { id: 12, name: 'coluna 12' }
  ]);



  const [perfiles, setPerfiles] = useState([
    [
      {
        id: 1, column: 1, name: 'Profesional semillero', routes: [[9, 26, 60, 69], [9, 62, 69, 103], [9, 45, 62, 71]], estudios: [{tipo: "Ingles", calidad: "Básico"}], experiencia : [{tipo:"Técnica(ArcGIS)",años : 0}, {tipo:"EsriNosa",años : 2}], habilidades:[ "Trabajo en equipo","Aprendizaje continuo","Comunicación","Orientación al cliente","Orientación al logo"] , competencias : ["Fundamentos ArcGIS", "Gestión de Datos", "Manipulación de datos", "Visualización de datos", "Compartir datos", "Análisis"]
      },
      { id: 2, column: 1, name: 'Auxiliar IT', routes: [[11, 22, 52]], estudios: [{tipo: "Ingles", calidad: "Básico"}, {tipo:"Nivel educativo", calidad: "Técnico, tecnólogo, profesional o estudiante de últimos semestres"}], habilidades:[ "Trabajo en equipo","Aprendizaje continuo","Comunicación","Orientación al cliente","Orientación al logo", "Habilidades interpersonales","Aención al detalle", "Habilidades informáticas"] , competencias : ["Fundamentos ArcGIS"] },
      { id: 3, column: 3, name: 'Auxiliar Adm' }
    ],
    [
      { id: 4, column: 2, name: 'Asistente Administrativo' },
      { id: 5, column: 2, name: 'Asesor Servicio al Cliente' },
    ],
    [
      { id: 6, column: 3, name: 'Diseñador Multimedia' },
      { id: 7, column: 3, name: 'Diseñador Gráfico' },
      { id: 8, column: 3, name: 'Diseñador Web' }
    ],
    [
      {
        id: 9, column: 4, name: 'Ing. Mercadeo Técnico', "routes": [
          [
            62,
            69,
            103
          ]
        ]
      },
      { id: 10, column: 4, name: 'Asesor Comercial' },
      { id: 11, column: 4, name: 'Analista IT' },
      { id: 17, column: 4, name: 'Analista SIG' },
      { id: 13, column: 4, name: 'Analista Adm.' },
      { id: 14, column: 4, name: 'Ing. de Soporte' },
      { id: 15, column: 4, name: 'Analista de Mercadeo' },
      { id: 16, column: 4, name: 'Copywriter' },
      { id: 18, column: 4, name: 'Analista WEB' },
      { id: 19, column: 4, name: 'Community Manager' },
      { id: 20, column: 4, name: 'Analista de Bases de Datos e Información' },
      { id: 21, column: 4, name: 'Analista de Seguridad de la Información' },
      { id: 22, column: 4, name: 'Analista de Datos' },
      { id: 23, column: 4, name: 'Community de Gestión del Cambio' },
      { id: 24, column: 4, name: 'Analista control interno' },
    ],
    [
      { id: 25, column: 4, name: 'Ing. de Soporte ISC' },
      { id: 43, column: 4, name: 'Coor. Administrativo' },
      { id: 26, column: 4, name: 'Coor Semillero' },
      { id: 27, column: 4, name: 'Coor. de Eventos' },
      { id: 28, column: 4, name: 'Coor. ADM y SST' },
      { id: 29, column: 4, name: 'Coordinador de Selección' },
      { id: 30, column: 4, name: 'Coordinador Selección' },
      { id: 31, column: 4, name: 'Coordinador PR' },
      { id: 32, column: 4, name: 'Coordinador de Compras' },
      { id: 33, column: 4, name: 'Coordinador de Arte y Diseño' },
      { id: 34, column: 4, name: 'Coordinador Digital Web' },
      { id: 35, column: 4, name: 'Coordinador de Calidad' },
      { id: 36, column: 4, name: 'Especialista de Producto' },
      { id: 37, column: 4, name: 'Programador' },
      { id: 38, column: 4, name: 'Coor. Operaciones Partners' },
      { id: 39, column: 4, name: 'Coor. de Comunidad' },
      { id: 40, column: 4, name: 'Coor. Adminsitrativo - Radicación' },
    ],
    [
      { id: 41, column: 6, name: 'Gerente de Cuenta' },
      { id: 42, column: 6, name: 'Trainer' },
      { id: 12, column: 6, name: 'Representante de Ventas' },
      { id: 44, column: 6, name: 'Ing. de Soporte ISC 2do Nivel' },
      { id: 45, column: 6, name: 'Instructor SIG' },
      { id: 46, column: 6, name: 'Quality Assurance Coordinator' },
      { id: 47, column: 6, name: 'Coor. Programa BP' },
      { id: 48, column: 6, name: 'Coor. Gestión del Cambio' },
      { id: 49, column: 6, name: 'Especialista SIG' },
      { id: 50, column: 6, name: 'Coor. de Proyectos' },
      { id: 51, column: 6, name: 'Especialista Martech' },
      { id: 52, column: 6, name: 'Especialista IT' },
      { id: 53, column: 6, name: 'Coordinador de Mercadeo' },
      { id: 54, column: 6, name: 'Coordinador de Generación de Demanda' },
      { id: 55, column: 6, name: 'Coordinador de Control Financiero' },
      { id: 56, column: 6, name: 'Coordinador de Operaciones' },
      { id: 57, column: 6, name: 'Coordinador de Adopción' },
      { id: 58, column: 6, name: 'Especialista de Comunidad' },
      { id: 59, column: 6, name: 'Especialista de Salesforce' }
    ],
    [
      { id: 60, column: 7, name: 'Lider del Semillero' },
      { id: 61, column: 7, name: 'Technical Account Manager' },
      { id: 62, column: 7, name: 'Lider Especialista SIG' },
      { id: 63, column: 6, name: 'Líder de Eventos' },
      { id: 64, column: 6, name: 'Líder de Técnico' },
      { id: 65, column: 6, name: 'Líder de Producto' },
      { id: 66, column: 6, name: 'Líder de Generación de Demanda' },
      { id: 67, column: 6, name: 'Ing. de Desarrollo' },
      { id: 68, column: 6, name: 'Lider de Operaciones' },
    ],
    [
      { id: 69, column: 8, name: 'Ing. de Solución' },
      { id: 70, column: 8, name: 'Ing. de Propuestas' },
      { id: 71, column: 8, name: 'Consultor SIG' },
      { id: 72, column: 8, name: 'Group Lead' },
      { id: 73, column: 8, name: 'Líder de Adopción' },
      { id: 74, column: 8, name: 'Líder de Partners' },
      { id: 75, column: 8, name: 'Líder de Comunicaciones' },
      { id: 76, column: 8, name: 'Des. de Alianzas' },
      { id: 77, column: 8, name: 'Consultor en Ciencia de Datos' },
      { id: 78, column: 8, name: 'Consultor de Requerimientos de Analitica' },
      { id: 79, column: 8, name: 'Gerente de Desarrollo de Negocios' },
      { id: 80, column: 8, name: 'Trainer Lead' },
      { id: 81, column: 8, name: 'Líder de Gestion Humana' },
      { id: 82, column: 8, name: 'Abagado' },
      { id: 83, column: 8, name: 'Líder de Datos' },
      { id: 84, column: 8, name: 'Especialista Salesforce' },
      { id: 85, column: 8, name: 'Líder Gestion del Cambio' },
      { id: 86, column: 8, name: 'Líder de Canales' },
      { id: 87, column: 8, name: 'Líder de Contenidos' },
      { id: 88, column: 8, name: 'Líder Habilitación de Ventas' }
    ],
    [
      { id: 89, column: 9, name: 'Gerente de Cuenta Clave' },
      { id: 90, column: 9, name: 'Gerente de Producto' },
      { id: 91, column: 9, name: 'Ingeniero de Desarrollo Experto' },
      { id: 92, column: 9, name: 'Gerente Exito del Cliente' },
      { id: 93, column: 9, name: 'Genente de Operaciones' }
    ],
    [
      { id: 94, column: 10, name: 'Gerente de Sector' },
      { id: 95, column: 10, name: 'Gerente de Partners' },
      { id: 96, column: 10, name: 'Gerente de Propuestas' },
      { id: 97, column: 10, name: 'Gerente de Eventos y Contenido' },
      { id: 98, column: 10, name: 'Gerente de Proyectos' },
      { id: 99, column: 10, name: 'Gerente de Suporte -Site Manager' },
      { id: 100, column: 10, name: 'Gerente de Datos' },
      { id: 101, column: 10, name: 'Gerente de Tecnología' },
      { id: 102, column: 10, name: 'Gerente de Servicios Profecionales' },
      { id: 103, column: 10, name: 'Technical Advisor' },
      { id: 104, column: 10, name: 'Gerente Funcional de Exito' },
      { id: 105, column: 10, name: 'Gerente de Nuevos Mercados' },
      { id: 106, column: 10, name: 'Gerente Funcional de Expanción' },
      { id: 107, column: 10, name: 'Gerente de Habilitación de Ventas' },
      { id: 108, column: 10, name: 'Gerente de Adopción' }
    ],
    [
      { id: 109, column: 11, name: 'Director de Operaciones' },
      { id: 110, column: 11, name: 'Director de Adopción' },
      { id: 111, column: 11, name: 'Arquitecto de Soluciones' },
      { id: 112, column: 11, name: 'Director IT' },
      { id: 113, column: 11, name: 'Director Juridico' },
    ],
    [
      { id: 114, column: 12, name: 'Gerente General' },
      { id: 115, column: 12, name: 'Gerente General (Ecuador y Panamá)' },
      { id: 116, column: 12, name: 'Director de Ventas y Mercadeo' },
      { id: 117, column: 12, name: 'Director de Ventas' },
      { id: 118, column: 12, name: 'Director de Nuevos Negocios' },
      { id: 119, column: 12, name: 'Director Exito' },
      { id: 120, column: 12, name: 'Director Gestión Humana' },
      { id: 121, column: 12, name: 'Director de Partners' }
    ],


  ]);

  return (
    <section className='section'>
      <GlobalProvider>
        <div className='config'>
          {/* <Setting profileActive={profileActive} /> */}
          <MenuRutas />
          <RequisitosUser />
        </div>
        <div className='result'>

          <SortableContext items={columns} >
            {columns.map((column) => (
              <Columns column={column} perfiles={perfiles} key={column.id} />
            ))}
          </SortableContext>
        </div>
      </GlobalProvider>
    </section>
  );
}


export default User;

