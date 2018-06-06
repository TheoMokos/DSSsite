function decision_func(){

  var bp_stbl = document.getElementById("a").value;
  var core_stbl = document.getElementById("b").value;
  var l_core = document.getElementById("c").value;
  var l_surf = document.getElementById("d").value;
  var l_bp = document.getElementById("e").value;
  var l_o2 = document.getElementById("f").value;
  var surf_stbl = document.getElementById("g").value;
  var comfort = document.getElementById("h").value;

  var result,decision;


  comfort = Number(comfort);
  l_core = Number(l_core);
  l_surf = Number(l_surf);
  l_bp = l_bp.split("/");






  if (bp_stbl == 'stable') {
    
    if (core_stbl == 'stable') {
      
      if (l_core > 37 && l_core < 42) {
        
        decision="S";
      
      }else if (l_core >= 36 && l_core <= 37) {
        
        if (l_bp[0] > 130 && l_bp[1] > 90 ) {
          
          if (l_o2 >= 98) {
            
            if (l_surf > 36.5) {
              
              decision = "S";
            
            }else if ((l_surf <= 36.5 && l_surf >= 35) || l_surf < 35) {
              
              decision = "A";
            
            }else {
              
              result = "l_surf_error";
            }

          }else if (l_o2 >= 90 && l_o2 < 98) {
            
            if (surf_stbl == 'stable') {
              
              decision = "S";
            
            }else if (surf_stbl == 'mod-stable') {
              
              decision = "I";
            
            }else if (surf_stbl == 'unstable') {
              
              decision = "A";
            
            }else {
              
              result = "surf_stbl_error";
            }

          }else if ((l_o2 >= 80 && l_o2 < 90) || l_o2 <80) {
            decision = "I";

          }else {
            result = "l_o2_error";
          }

        }else if ((l_bp[0] < 130 && l_bp[1] < 90) && (l_bp[0] > 90 && l_bp[1] > 70)) {

          if (l_o2 >= 98) {

            if (l_surf > 36.5) {
              
              decision = "I";
            
            }else if (l_surf <= 36.5 && l_surf >= 35) {

              if (comfort < 12.5 && comfort >=0) {

                if (surf_stbl == 'stable') {

                  decision = "S";

                }else if (surf_stbl == 'mod-stable') {

                  decision = "I";
                
                }else if (surf_stbl == 'unstable') {

                  decision = "A";

                }else {

                  result = "surf_stbl_error";
                
                }

              }else if (comfort >= 12.5 && comfort <=20) {

                if (surf_stbl == 'stable') {

                  decision = "A";
                
                }else if (surf_stbl == 'mod-stable') {

                  decision = "I";
                
                }else if (surf_stbl == 'unstable') {

                  decision = "S";
                
                }else {

                  result = "surf_stbl_error";
                }

              }else {
                
                result = "comfort_error";
              
              }

            }else if (l_surf < 35) {

              decision = "A";
            
            }else {

              result = "l_surf_error";
            }

          }else if (l_o2 >= 90 && l_o2 < 98) {

            if (l_surf > 36.5) {

              decision = "S";
            
            }else if ((l_surf <= 36.5 && l_surf >= 35) || l_surf < 35) {

              decision = "A";
            
            }else {

              result = "l_surf_error";
            }

          }else if ((l_o2 >= 80 && l_o2 < 90) || l_o2 <80) {

            decision = "I";

          }else {
            
            result = "l_o2_error";
          
          }

        }else if (l_bp[0] < 90 && l_bp[1] < 70) {

          decision = "A";

        }else {
          
          result = "l_bp_error";
        
        }

      }else if (l_core < 36 && l_core >31) { 

        if (l_surf > 36.5) {

          decision = "A";
        
        }else if (l_surf <= 36.5 && l_surf >= 35) {

          if (l_o2 >= 98) {

            decision = "S";
          
          }else if (l_o2 >= 90 && l_o2 < 98) {

            if (l_bp[0] > 130 && l_bp[1] > 90 ) {

              decision = "I";
            
            }else if ((l_bp[0] < 130 && l_bp[1] < 90) && (l_bp[0] > 90 && l_bp[1] > 70)) {

              if (surf_stbl == 'stable') {

                decision = "S";
              
              }else if (surf_stbl == 'mod-stable') {

                decision = "I";
              
              }else if (surf_stbl == 'unstable') {

                decision = "S";
              
              }


            }else if (l_bp[0] < 90 && l_bp[1] < 70) {

              decision = "I";
            
            }
          
          }else if ((l_o2 >= 80 && l_o2 < 90) || l_o2 <80) {

            decision = "I";
          
          }else {

            result = "l_o2_error";
          }


        }else if (l_surf < 35) {

          if (comfort < 8.5 && comfort >= 0) {

            decision = "S";
          
          }else if (comfort >= 8.5 && comfort <=20) {

            decision = "A";
          
          }


        }else {

          result = "l_surf_error";
        }

      }else {
        result = "l_core_error"
      }
    }else if (core_stbl == 'mod-stable') {

      decision = "I";

    }else if (core_stbl == 'unstable') {

      decision = "S";

    }else {
      result = "core_stbl_error";
    }


  }else if (bp_stbl == 'mod-stable') {

    if (l_core > 37 && l_core < 42) {

      decision = "A";
    }else if (l_core >= 36 && l_core <= 37) {

      if (comfort < 7.5 && comfort >= 0) {

        decision = "S";
      
      }else if (comfort >= 7.5 && comfort <= 20) {

        if (l_bp[0] > 130 && l_bp[1] > 90 ) {

          decision = "A";
        
        }else if ((l_bp[0] < 130 && l_bp[1] < 90) && (l_bp[0] > 90 && l_bp[1] > 70)) {

          if (l_surf > 36.5) {

            decision = "A";
          
          }else if (l_surf <= 36.5 && l_surf >= 35) {

            if (surf_stbl == 'stable') {

              decision = "S";
            
            }else if (surf_stbl == 'mod-stable') {

              decision = "I";
            }else if (surf_stbl == 'unstable') {

              decision = "S";
            }


          }else if (l_surf < 35) {

            decision = "S";
          
          }else {

            result = "l_surf_error";
          }


        }else if (l_bp[0] < 90 && l_bp[1] < 70) {

          decision = "I";
        
        }else {

          result = "l_bp_error";
        
        }


      }else {

        result = "comfort_error";
      
      }


    }else if (l_core < 36 && l_core >31) {

      decision = "A";
    }


  }else if (bp_stbl == 'unstable') {

    if (l_surf > 36.5) {

      decision  = "A";
    
    }else if (l_surf <= 36.5 && l_surf >= 35) {

      if (surf_stbl == 'stable') {

        decision = "A";
      
      }else if (surf_stbl == 'mod-stable') {

        decision = "I";
      
      }else if (surf_stbl == 'unstable') {

        if (l_core > 37 && l_core < 42) {

          decision = "A";

        }else if (l_core >= 36 && l_core <= 37) {

          if (comfort < 12.5 && comfort >= 0) {

            decision = "S";
          
          }else if (comfort >= 12.5 && comfort <= 20 ) {

            decision = "A";
          
          }else {

            result = "comfort_error"
          }


        }else if (l_core < 36 && l_core >31) {

          decision = "S";
        
        }else {

          result = "l_core_error";
        
        }
      
      }else {

        result = "surf_stbl_error";
      }

    }else if (l_surf < 35) {

      if (l_o2 >= 98) {

        if (surf_stbl == 'stable') {

          decision = "S";
        
        }else if (surf_stbl == 'mod-stable') {

          decision = "I";
        
        }else if (surf_stbl == 'unstable') {

          decision = "A";
        
        }else {

          result = "surf_stbl_error";
        }


      }else if (l_o2 >= 90 && l_o2 < 98) {

        if (comfort < 12.5 && comfort >= 0) {

          if (l_core > 37 && l_core < 42) {

            decision = "I";
          
          }else if (l_core >= 36 && l_core <= 37) {

            decision = "I";
          
          }else if (l_core < 36 && l_core >31) {

            decision = "S";
          
          }else {

            result = "l_core_error";
          }


        }else if (comfort >= 12.5 && comfort <= 20) {

          decision = "S";
        }else {

          result = "comfort_error";
        }


      }else if ((l_o2 >= 80 && l_o2 < 90) || l_o2 <80) {

        decision = "I";


      }else {

        result = "l_o2_error";
      }


    }else {

      result = "l_surf_error";
    }


  }else{

    result = "bp_stbl_error";
  }


if (decision == 'A') {

  document.getElementById("output").innerHTML = "Patient must be sent to the General Hospital Room";

}else if (decision == 'S') {

  document.getElementById("output").innerHTML = "Patient can prepare to go home";

}else if (decision == 'I') {

  document.getElementById("output").innerHTML = "Patient must be sent to the Intensive Care Unit";

}else {

  if (result == 'bp_stbl_error') {
    document.getElementById("output").innerHTML = "The Stability of blood pressure you gave is wrong. Refill the form";
  
  }else if (result == 'core_stbl_error') {

    document.getElementById("output").innerHTML = "The Stability of core temperature you gave is wrong. Refill the form";
  
  }else if (result == 'l_core_error') {

    document.getElementById("output").innerHTML = "The temperature you gave is wrong. Refill the form";
  
  }else if (result == 'l_bp_error') {

    document.getElementById("output").innerHTML = "The blood pressure you gave is wrong. Refill the form";
  
  }else if (result == 'l_o2_error') {

    document.getElementById("output").innerHTML = "The oxygen saturation you gave is wrong. Refill the form";
  
  }else if (result == 'l_surf_error') {

    document.getElementById("output").innerHTML = "The surface temperature you gave is wrong. Refill the form";
  
  }else if (result == 'surf_stbl_error') {

    document.getElementById("output").innerHTML = "The Stability of surface temperature you gave is wrong. Refill the form";
  
  }else {

    document.getElementById("output").innerHTML = "The comfort number you gave is wrong. Refill the form";
  }
}
}