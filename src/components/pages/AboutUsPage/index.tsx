import { List, ListItem, Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import SidebarComponent from '@/components/features/SidbarComponent';
import { aboutUsSidebar } from '@/utils/constants/sidebar';

import styles from './styles.module.scss';

const AboutUsPage = () => {
  return (
    <Box className={styles.aboutUsPage}>
      <SidebarComponent categories={aboutUsSidebar} />
      <Box className={styles.content}>
        <Typography className={styles.title}>О компании</Typography>
        <Typography className={styles.simpleText}>
          Прямые поставки непосредственно от производителей, отработанные
          транспортно-логистические схемы и отсутствие посредников гарантируют
          демократично невысокие цены. И это основа стратегии компании —
          организовать максимально быструю поставку качественного природного
          камня по минимальной цене, с доставкой непосредственно на объект.
        </Typography>
        <Typography className={styles.titleText}>
          «Ecokamen» — надёжный поставщик натурального камня
        </Typography>
        <Typography className={styles.strongText}>
          Компания Ecokamen сегодня:
        </Typography>
        <List>
          <ListItem className={styles.listItem}>
            <CircleIcon sx={{ width: 10, height: 10, color: 'green' }} />
            <Typography className={styles.listItem}>
              это коллектив, состоящий из профессионалов высокого класса;
            </Typography>
          </ListItem>
          <ListItem className={styles.listItem}>
            <CircleIcon sx={{ width: 10, height: 10, color: 'green' }} />
            <Typography className={styles.listItem}>
              это лучшие цены;
            </Typography>
          </ListItem>
          <ListItem className={styles.listItem}>
            <CircleIcon sx={{ width: 10, height: 10, color: 'green' }} />
            <Typography className={styles.listItem}>
              широкий ассортимент природного камня;
            </Typography>
          </ListItem>
          <ListItem className={styles.listItem}>
            <CircleIcon sx={{ width: 10, height: 10, color: 'green' }} />
            <Typography className={styles.listItem}>
              своевременные поставки;
            </Typography>
          </ListItem>
          <ListItem className={styles.listItem}>
            <CircleIcon sx={{ width: 10, height: 10, color: 'green' }} />
            <Typography className={styles.listItem}>
              чёткое выполнение взятых обязательств.
            </Typography>
          </ListItem>
        </List>
        <Typography className={styles.strongText}>И не только…</Typography>
        <Typography className={styles.titleText}>
          Продуманный маркетинг, направленный на удобство клиентов
        </Typography>
        <Typography className={styles.simpleText}>
          Производство Компании представляет собой комплекс взаимосвязанных
          объектов, каждый из которых логически вписан в общую структуру
          взаимодействия. Благодаря отлаженной за годы работы системе,
          сотрудничество с карьероуправлениями, поставка агрегатного (сырого)
          камня в цеха, дальнейшая его сортировка, обработка и упаковка,
          доставка на объект заказчика - всё это является звеньями одного общего
          процесса
        </Typography>
        <Typography className={styles.bigText}>
          Программа «Склад природного камня»
        </Typography>
        <Typography className={styles.simpleText}>
          Складские и производственные площади Компании, расположенные в
          Ростовской области, предназначены для обеспечения резервных объёмов
          необработанного камня и изделий из него, востребованных в текущий
          сезон. На складе предусмотрена система перемещения продукции,
          реализующая возможность незамедлительного включения в цикл
          производства камня любой степени обработки. Например, необработанный,
          но сортированный по толщинам плитняк по желанию заказчика может
          дополнительно пройти оперативную фазу галтования в специальных
          барабанах. Таким образом, в результате заказчик получает
          соответствующий его предпочтениям продукт — товар наилучшего качества,
          за минимальный промежуток времени по оптимальной цене.
        </Typography>
        <Typography className={styles.titleText}>
          Низкие цены, высокий уровень облуживания
        </Typography>
        <Typography className={styles.simpleText}>
          Низкие цены не означают отсутствие стремления сделать стоимость
          натурального камня ещё привлекательнее для потребителей. Копания
          «Ecokamen» проводит регулярные распродажи и акции, в рамках которых
          реализационная цена качественных изделий из природного камня
          существенно снижена. На высоком уровне поставлена в компании и
          информационная поддержка клиентов: специалисты подробно отвечают на
          любые возникшие вопросы (которые можно задать лично, по телефону или
          по электронной почте), а также помогают подобрать оптимально выгодный
          вариант покупки, посоветовав камень, идеально отвечающий по
          эксплуатационным характеристикам, назначению, внешнему виду, стоимости
          индивидуальным требованиям клиента.
        </Typography>
        <Typography className={styles.strongText}>
          С уважением! Компания «Ecokamen»
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
