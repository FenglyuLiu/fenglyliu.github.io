// 照片顺序配置文件
// 您可以在这里调整照片的显示顺序
// 文件名不需要包含扩展名，系统会自动匹配

export const photoOrder = {
  animals: [
    // 动物照片顺序 - 按您想要的顺序排列
    'DSC00141.jpg',
    'DSC00143.jpg',
    'DSC00146.jpg',
    'DSC00253-2.jpg',
    'DSC00371.jpg',
    'DSC00389.jpg',
    'DSC00397.jpg',
    'DSC00556.jpg',
    'DSC00695.JPG',
    'DSC01053.jpg',
    'DSC01910 2.JPG',
    'DSC01914 2.jpg',
    'DSC01916 2.jpg',
    'DSC01918 2.jpg',
    'DSC02227.JPG',
    'DSC02246.jpg',
    'DSC02253.JPG',
    'DSC02261.jpg'
  ],
  
  landscapes: [
    // 风景照片顺序 - 按您想要的顺序排列
    'DSC00518.jpg',
    'DSC00780.JPG',
    'DSC02106.JPG',
    'DSC02231.JPG'
  ],
  
  flowers: [
    // 花花照片顺序 - 按您想要的顺序排列
    'DSC00985.JPG',
    'DSC01055.jpg',
    'DSC01076.JPG',
    'DSC02236.jpg',
    'IMG_3681.JPG',
    'IMG_3683.JPG',
    'IMG_3685.JPG'
  ],
  
  cities: [
    // 城市照片顺序 - 按您想要的顺序排列
    'DSC01498 2.jpg',
    'DSC01562 2.jpg',
    'DSC01691 2.jpg',
    'DSC01811 2.jpg',
    'DSC01971.jpg',
    'DSC02242.jpg',
    'DSC02262.jpg',
    'DSC02268.jpg',
    'DSC02273.JPG',
    'DSC02362.JPG',
    'DSC02371.JPG'
  ]
}

// 获取排序后的照片列表
export function getOrderedPhotos(photos, category) {
  const order = photoOrder[category] || []
  
  if (order.length === 0) {
    // 如果没有配置顺序，使用默认排序
    return photos.sort()
  }
  
  // 按照配置的顺序排列
  const orderedPhotos = []
  const remainingPhotos = [...photos]
  
  // 先添加配置顺序中的照片
  order.forEach(filename => {
    const photo = remainingPhotos.find(p => 
      p.toLowerCase().startsWith(filename.toLowerCase())
    )
    if (photo) {
      orderedPhotos.push(photo)
      remainingPhotos.splice(remainingPhotos.indexOf(photo), 1)
    }
  })
  
  // 再添加剩余的照片
  orderedPhotos.push(...remainingPhotos.sort())
  
  return orderedPhotos
}
