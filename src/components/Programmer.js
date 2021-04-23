import { Avatar, Box, Button, Chip, Input, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import junior from '../images/junior.png';
import ssr from '../images/ssr.png';
import sr from '../images/sr.png';

const useStyles = makeStyles((theme) => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

const softSkills = [
  'Liderazgo',
  'Paciente',
  'Sociable',
  'Trabajo en equipo',
  'SCRUM',
  'Kanban'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Programmer(){
  const [open, setOpen] = useState(false);
  const [horas, setHoras] = useState('');
  const [skills, setSkills] = useState([]);

  const [seniorityAvatar, setSeniorityAvatar] = useState(junior);
  
  //const theme = useTheme()
  const classes = useStyles();

  
  const handleChangeExpertiz = (event) => {
    setSeniorityAvatar(event.target.value);
  };

  const handleChangeCantHoras = (event) => {
    setHoras(event.target.value)
  }

  const handleChangeSoftSkills = (event) => {
    setSkills(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <>


      <Avatar src={seniorityAvatar} onClick={handleClickOpen}/>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Agregar miembro del equipo</DialogTitle>
        <DialogContent>

          <InputLabel id="demo-simple-select-label">Expertiz</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={seniorityAvatar}
            onChange={handleChangeExpertiz}
            fullWidth
          >
            <MenuItem value={junior}>Junior</MenuItem>
            <MenuItem value={ssr}>Semi Senior</MenuItem>
            <MenuItem value={sr}>Senior</MenuItem>
          </Select>

          <Box m={2} />

          <InputLabel id="demo-simple-select-label">Horas por día</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={horas}
            onChange={handleChangeCantHoras}
            fullWidth
          >
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={8}>8</MenuItem>
          </Select>

          <Box m={2} />

          <InputLabel id="demo-mutiple-chip-label">Soft Skills</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            fullWidth
            value={skills}
            onChange={handleChangeSoftSkills}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {softSkills.map((skill) => (
              <MenuItem key={skill} value={skill}  >
                {skill} 
              </MenuItem>
            ))}
          </Select>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}