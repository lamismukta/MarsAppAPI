export type Rover = {
  name: string;
  cameras: Camera[];
};

export type Camera = {
  name: string;
  full_name: string;
};

export function trimCamera(camera: Camera): Camera {
  return {
    name: camera.name,
    full_name: camera.full_name,
  };
}

export function trimCameraData(bigCameraData: Camera[]) {
  return bigCameraData.map((camera) => trimCamera(camera));
}

export const enum Cameras {
  FHAZ = "FHAZ",
  RHAZ = "RHAZ",
  MAST = "MAST",
  CHEMCAM = "CHEMCAM",
  MAHLI = "MAHLI",
  MARDI = "MARDI",
  NAVCAM = "NAVCAM",
  PANCAM = "PANCAM",
  MINITES = "MINITES",
  EDL_RUCAM = "EDL_RUCAM",
  EDL_DDCAM = "EDL_DDCAM",
  EDL_PUCAM1 = "EDL_PUCAM1",
  EDL_PUCAM2 = "EDL_PUCAM2",
  NAVCAM_LEFT = "NAVCAM_LEFT",
  NAVCAM_RIGHT = "NAVCAM_RIGHT",
  MCZ_RIGHT = "MCZ_RIGHT",
  MCZ_LEFT = "MCZ_LEFT",
  FRONT_HAZCAM_LEFT_A = "FRONT_HAZCAM_LEFT_A",
  FRONT_HAZCAM_RIGHT_A = "FRONT_HAZCAM_RIGHT_A",
  REAR_HAZCAM_LEFT = "REAR_HAZCAM_LEFT",
  REAR_HAZCAM_RIGHT = "REAR_HAZCAM_RIGHT",
  EDL_RDCAM = "EDL_RDCAM",
  SKYCAM = "SKYCAM",
  SHERLOC_WATSON = "SHERLOC_WATSON",
  SUPERCAM_RMI = "SUPERCAM_RMI",
  LCAM = "LCAM",
}
